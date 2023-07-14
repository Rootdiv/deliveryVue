<template>
  <div class="form-group">
    <p v-if="title" class="form-group__title" v-text="title" />
    <div class="form-fields">
      <slot />
    </div>
  </div>
</template>

<script setup>
  defineProps({
    title: {
      type: String,
      default: '',
    },
  });
</script>

<style lang="scss" scoped>
  $white: $WHITE;

  .form {
    &-fields {
      margin-top: 3.2rem;
    }

    &-group {
      &__title {
        color: $white;
        font-family: 'Gilroy Bold';
        font-size: 1.8rem;
      }
    }
  }
</style>
