<template>
  <div class="form-card">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .form-card {
    width: 100%;
    padding: 3rem;
    border-radius: 1rem;
    background: linear-gradient(90deg, #494544 0%, #504b4a 100%);
  }
</style>
