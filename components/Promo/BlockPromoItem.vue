<template>
  <li class="promo-list-item">
    <img v-lazy-load :src="image.src" :alt="image.alt" class="image" />
    <div class="info">
      <p class="title" v-text="title" />
      <p class="description" v-text="description" />
      <p class="time" v-text="time" />
    </div>
  </li>
</template>

<script setup>
  defineProps({
    id: {
      type: String,
      default: '-1',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    time: {
      type: String,
      default: '',
    },
    image: {
      type: Object,
      default: () => ({
        src: '',
        alt: '',
      }),
    },
  });
</script>

<style lang="scss" scoped>
  $background-light: $BACKGROUND-LIGHT;
  $white: $WHITE;

  .promo-list-item {
    display: flex;
    overflow: hidden;
    flex-direction: column;
    border-radius: 1rem;
    background: $background-light;

    .image {
      width: 100%;
      height: 15rem;
    }

    .info {
      width: 100%;
      padding: 1.5rem 2.4rem;
      font-family: Gilroy;
      @include adaptive-font(1.4, 0.9);
      line-height: 1.6rem;

      @include mobile {
        line-height: 1.4rem;
      }
    }

    .title {
      margin-bottom: 0.5rem;
      color: $white;
      font-family: 'Gilroy Bold';
      @include adaptive-font(1.8, 1.6);

      @include tablet-desktop {
        line-height: 2.2rem;
      }

      @include mobile {
        line-height: 1.9rem;
      }
    }

    .description {
      margin-bottom: 2rem;
      color: #a6a7ab;
    }

    .time {
      color: #6fa076;
    }
  }
</style>
