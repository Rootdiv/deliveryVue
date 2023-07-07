<template>
  <v-section :is-full="true" class="section-banner-carousel">
    <block-banner-carousel-list :banners="bannerAdapter.getBanners(banners)" :loading="pending" />
  </v-section>
</template>

<script setup>
  import BlockBannerCarouselList from '@/components/BannerCarousel/BlockBannerCarouselList.vue';

  const root = useNuxtApp();

  const { banner: bannerService } = root.$services;
  const { banner: bannerAdapter } = root.$adapters;

  const { data: banners, pending } = useAsyncData(() => bannerService.getBanners());
</script>

<style lang="scss" scoped>
  .section-banner-carousel {
    position: relative;
    padding: 0;
    overflow-x: hidden;
  }
</style>
