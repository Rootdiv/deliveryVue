<template>
  <div class="radio-group">
    <div class="v-radio-group">
      <div
        v-for="(option, index) in options"
        :key="index"
        :class="{ 'v-radio-option': true, 'v-radio-option-selected': option.value === selectedOption }"
        @click="selectOption(option)">
        {{ option.text }}
      </div>
    </div>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script setup>
  defineProps({
    options: {
      type: Array,
      required: true,
    },
    error: {
      type: String,
      default: '',
    },
  });

  const emit = defineEmits(['input', 'update:model-value']);

  const selectedOption = ref(null);

  const selectOption = (option) => {
    selectedOption.value = option.value;
    emit('input', option);
  };
</script>

<style lang="scss" scoped>
  $white: $WHITE;

  .radio-group {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    .error {
      color: $RED;
    }
  }

  .v-radio-group {
    display: flex;
    width: max-content;
    border-radius: 1rem;
  }

  .v-radio-option {
    padding: 2rem 4rem;
    border: 0.1rem solid #72a479;
    color: $white;
    cursor: pointer;
    font-family: 'Gilroy Bold';
    font-size: 1.6rem;

    &:first-child {
      border-radius: 1rem 0 0 1rem;
    }

    &:last-child {
      border-radius: 0 1rem 1rem 0;
    }
  }

  .v-radio-option-selected {
    background: linear-gradient(133deg, #618967 0%, #72a479 100%);
  }
</style>
