<template>
  <div class="checkbox-wrapper">
    <div class="custom-checkbox">
      <input
        :id="`checkbox-${name}`"
        type="checkbox"
        class="checkbox"
        :checked="isChecked"
        @input="updateValue($event.target.checked)" />
      <label :for="`checkbox-${name}`" class="label">{{ label }}</label>
    </div>
    <span v-if="error" class="checkbox__error-message" v-text="error" />
  </div>
</template>

<script setup>
  const props = defineProps({
    modelValue: {
      type: [String, Boolean],
      default: false,
    },
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
  });

  const emit = defineEmits(['update:modelValue']);

  const isChecked = ref(props.modelValue === 'true');

  const updateValue = (value) => {
    isChecked.value = value;
    emit('update:modelValue', value);
  };
</script>

<style lang="scss" scoped>
  $green: $GREEN;
  $white: $WHITE;
  $red: $RED;

  .custom-checkbox {
    display: flex;
    align-items: flex-end;
    column-gap: 1rem;
    cursor: pointer;
  }

  .checkbox {
    width: 1.8rem;
    height: 1.8rem;
    border: none;
    border-radius: 0.25rem;
    background-color: $white;
    cursor: pointer;

    &__error-message {
      display: block;
      margin-top: 1rem;
      color: $red;
      font-family: Gilroy;
      font-size: 1.2rem;
      line-height: 130%;
    }
  }

  .checkbox:checked {
    background-color: $green;
  }

  .label {
    color: #fff;
    cursor: pointer;
    font-family: 'Gilroy Medium';
    font-size: 1.3rem;
  }
</style>
