<template>
  <div class="promo-card-item">
    <div class="image" />
    <div class="info">
      <p class="title" />
      <p class="description" />
      <p class="time" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  $green-gradient: $GREEN-GRADIENT;
  $background-light: $BACKGROUND-LIGHT;
  $white: $WHITE;
  $gray: $GRAY;
  $green-light: $GREEN-LIGHT;

  .promo-card-item {
    position: relative;
    z-index: 2;
    border-radius: 1rem;
    background: $background-light;
    cursor: pointer;

    @include hover {
      transition: all 0.3s ease;

      &:hover {
        z-index: 1;
        box-shadow: 0 3rem 4.5rem rgba(43, 40, 40, 60%);
        filter: drop-shadow(0 3rem 4.5rem rgba(43, 40, 40, 60%));
      }
    }

    .image {
      overflow: hidden;
      width: 100%;
      height: 100%;
      min-height: 15.7rem;
      max-height: 15.7rem;
      animation: pulse-bg 1s infinite;
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
    }

    .info {
      display: flex;
      flex-direction: column;
      padding: 1.5rem;
      row-gap: 1.5rem;
    }

    .title {
      width: 50%;
      border-radius: 1rem;
      animation: pulse-bg 1s infinite;

      @include tablet-desktop {
        height: 2.7rem;
      }

      @include mobile {
        height: 2.4rem;
      }
    }

    .description {
      height: 10rem;
      border-radius: 1rem;
      animation: pulse-bg 1s infinite;
    }

    .time {
      width: 30%;
      height: 2rem;
      border-radius: 1rem;
      animation: pulse-bg 1s infinite;
    }
  }
</style>
