<template>
  <div class="select" :class="{ error: error, disabled: disabled }">
    <div class="select-container">
      <div
        class="select__field select-wrapper"
        :class="{ 'select__field--type-error': error, 'select__field--type-disabled': disabled }"
        @click="setActive">
        <input
          v-model="model"
          type="text"
          :placeholder="placeholder"
          :name="name"
          :required="required"
          :disabled="disabled"
          class="select__input"
          :class="{ 'select__input--disabled': disabled }" />
        <v-icon v-if="icon" :name="icon" class="select__icon" :class="{ 'select__icon--rotate': isActive }" />
      </div>

      <div v-show="isActive" class="select-options-wrapper select-wrapper">
        <ul class="select-options" :class="{ 'select-options--disabled': !filteredOptions.length }">
          <li v-show="!filteredOptions.length" class="select-options__option select-options__option--disabled">
            Нет доступных вариантов
          </li>
          <li
            v-for="{ text, value } in filteredOptions"
            :key="`select-option-${value}`"
            class="select-options__option"
            :class="{ 'select-options__option--active': value.toString() === modelValue.toString() }"
            @click="onSelect(value)">
            {{ text }}
          </li>
        </ul>
      </div>
    </div>
    <p v-if="error" class="select__error-message" v-text="error" />
  </div>
</template>

<script setup>
  const props = defineProps({
    modelValue: {
      type: [String, Number],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: 'Выберите вариант',
    },
    required: {
      type: Boolean,
      default: true,
    },
    error: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: 'dropdown-arrow',
    },
    options: {
      type: Array,
      default: () => [],
    },
  });

  const emit = defineEmits(['update:modelValue']);

  const isActive = ref(false);
  const valueProp = computed(() => props.modelValue);

  const getOptionByValue = (value) => {
    return props.options.find((item) => {
      const findValue = value.toString().toLowerCase();
      const itemValue = item.value.toString().toLowerCase();

      return findValue === itemValue;
    });
  };

  const model = ref(valueProp.value && props.options.length ? getOptionByValue(valueProp.value)?.text : '');

  watch(valueProp, (value) => {
    const option = getOptionByValue(value);
    model.value = option ? option.text : '';
  });

  const filteredOptions = computed(() => {
    if (!model.value) return props.options;

    return props.options.filter((item) => {
      const modelValue = model.value.toString().toLowerCase();
      const optionValue = item.text.toString().toLowerCase();

      return optionValue.includes(modelValue);
    });
  });

  const onSelect = (value) => {
    const selectedOption = getOptionByValue(value);
    model.value = selectedOption ? selectedOption.text : '';
    isActive.value = false;
    emit('update:modelValue', value);
  };

  const setActive = () => {
    if (props.disabled) return;
    isActive.value = true;
  };

  const checkClickOutside = ({ target }) => {
    if (isActive.value && !target.closest(`.select-container`)) {
      isActive.value = false;
    }
  };

  onMounted(() => {
    document.body.addEventListener('click', checkClickOutside);
  });

  onUnmounted(() => {
    document.body.removeEventListener('click', checkClickOutside);
  });
</script>

<style lang="scss" scoped>
  $green: $GREEN;
  $gray: $GRAY;
  $gray_light: $GRAY_LIGHT;
  $black: $BLACK;
  $red: $RED;
  $white: $WHITE;

  .select {
    position: relative;

    &-container {
      position: relative;
    }

    &-wrapper {
      border: 0.1rem solid rgba($black, 20%);
      border-radius: 1rem;
    }

    &__field {
      display: flex;
      width: 100%;
      justify-content: space-between;
      cursor: pointer;
      transition: 0.3s;

      @include tablet-desktop {
        padding: 1.5rem 2rem;
        column-gap: 2rem;
      }

      @include mobile {
        padding: 1rem 1.6rem;
        column-gap: 1.2rem;
      }

      &--type {
        &-error {
          border-color: $red;
        }

        &-disabled {
          cursor: not-allowed;
          opacity: 0.7;
        }
      }
    }

    &__input {
      width: 100%;
      border: none;
      background-color: transparent;
      color: $white;
      cursor: pointer;
      font-family: Gilroy;
      font-size: 1.6rem;
      outline: none;

      &::placeholder {
        color: inherit;
      }

      &--disabled {
        cursor: not-allowed;
      }
    }

    &__icon {
      width: 1.5rem;
      min-width: 1.5rem;
      pointer-events: none;
      transition: 0.3s;

      &--rotate {
        rotate: 180deg;
      }
    }

    /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
    &__field--type-error &__icon:deep(path) {
      fill: $white;
    }

    &-options {
      display: flex;
      width: 100%;
      flex-direction: column;

      @include tablet-desktop {
        max-height: calc(25rem - 1.8rem * 2);
      }

      @include mobile {
        max-height: calc(19rem - 1rem * 2);
      }

      &:not(&--disabled) {
        overflow: auto;
        -ms-overflow-style: none;
      }

      &::-webkit-scrollbar {
        width: 0.5rem;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 2.4rem;
        background-color: $gray_light;
      }

      &-wrapper {
        position: absolute;
        z-index: $zLayerOverlay;
        overflow: hidden;
        width: 100%;
        background: linear-gradient(90deg, #494544 0%, #504b4a 100%);

        @include tablet-desktop {
          top: calc(100% + 1rem);
          min-width: 31rem;
          padding: 1.8rem 0;
        }

        @include mobile {
          top: calc(100% + 0.8rem);
          padding: 1rem 0;
        }
      }

      &__option {
        color: $white;
        cursor: pointer;
        font-family: 'Gilroy Light';
        @include adaptive-font(1.6, 1.4);
        transition: 0.3s;

        &:not(&--disabled) {
          @include tablet-desktop {
            padding: 1.2rem 2rem;
          }

          @include mobile {
            padding: 1rem 1.6rem;
          }
        }

        &--disabled {
          cursor: not-allowed;

          @include tablet-desktop {
            padding: 0 2rem;
          }

          @include mobile {
            padding: 0 1.6rem;
          }
        }

        &:not(&--disabled):hover,
        &--active {
          background: linear-gradient(114.93deg, #618967 5.11%, #72a479 94%);
        }
      }
    }

    &__error-message {
      margin-top: 1rem;
      color: $red;
      font-family: 'Gilroy Medium';
      @include adaptive-font(1.2, 1);
    }
  }
</style>
