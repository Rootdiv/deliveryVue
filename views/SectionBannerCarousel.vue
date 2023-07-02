<template>
  <v-section :is-full="true" class="section-banner-carousel">
    <BlockBannerCarouselList :banners="banners" :loading="pending" />
  </v-section>
</template>

<script setup>
  import BlockBannerCarouselList from '@/components/BannerCarousel/BlockBannerCarouselList.vue';

  const root = useNuxtApp();

  const { banner: bannerService } = root.$services;

  const banners = ref([]);
  const pending = ref(true);

  onBeforeMount(async () => {
    banners.value = await bannerService.getBanners();
    pending.value = false;
  });
</script>

<style lang="scss" scoped>
  .section-banner-carousel {
    position: relative;
    padding: 0;
    overflow-x: hidden;
  }
</style>
