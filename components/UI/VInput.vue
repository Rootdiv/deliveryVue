<template>
  <div class="field" :class="{ error: error }">
    <input
      v-maska
      v-bind="$attrs"
      :data-maska="maska"
      :value="modelValue"
      :type="type"
      class="field__input"
      @input="onInput" />
    <span v-if="error" class="field__error-message" v-text="error" />
  </div>
</template>

<script setup>
  defineProps({
    modelValue: {
      type: [String, Number],
      default: '',
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    error: {
      type: String,
      default: '',
    },
    maska: {
      type: [String, Array],
      default: null,
    },
  });

  const emit = defineEmits(['update:modelValue']);

  const onInput = (event) => {
    emit('update:modelValue', event.target.value);
  };
</script>
<style lang="scss" scoped>
  $black: $BLACK;
  $gray: $GRAY;
  $white: $WHITE;
  $red: $RED;
  $green: $GREEN;

  .field {
    &.error {
      input {
        border: 0.1rem solid $red;
      }
    }

    input,
    input::placeholder {
      width: 100%;
      color: $white;
      font-family: Gilroy;
      font-size: 1.6rem;
      outline: none;
      transition: all 0.5s ease;

      @include mobile-tablet {
        font-size: 1rem;
        line-height: 0.95rem;
      }
    }

    input::placeholder {
      color: $white;
    }

    input {
      padding: 2rem 2rem 2rem 3rem;
      border: 0.1rem solid rgba($black, 20%);
      border-radius: 1rem;
      background-color: transparent;
      color: $white;

      &:disabled {
        background-color: $gray;
      }

      &:focus {
        border-color: $green;
      }
    }

    &__error-message {
      display: block;
      margin-top: 1rem;
      color: $red;
      font-family: Gilroy;
      font-size: 1.2rem;
      line-height: 130%;
    }
  }
</style>
