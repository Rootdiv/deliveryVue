<template>
  <SectionBannerCarousel />
  <SectionProducts v-bind="productsColdsSacksData" />
  <SectionProducts v-bind="productsHotSnacksData" />
  <SectionProducts v-bind="productsMeatData" />
</template>

<script setup>
  import SectionBannerCarousel from '@/views/SectionBannerCarousel.vue';
  import SectionProducts from '@/views/SectionProducts.vue';

  const root = useNuxtApp();
  const { products: productsEnum, banners: bannersEnum } = root.$configs.enums;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const bannersData = ref({
    dataSettings: {
      needSlider: true,
      bannersArea: bannersEnum.main.code,
    },
  });

  const productsColdsSacksData = ref({
    sectionSettings: {
      title: 'Холодные закуски',
    },
    dataSettings: {
      needSlider: true,
      productsCode: productsEnum.cold.code,
    },
  });

  const productsHotSnacksData = ref({
    sectionSettings: {
      title: 'Горячие закуски',
    },
    dataSettings: {
      needSlider: true,
      productsCode: productsEnum.hot.code,
    },
  });

  const productsMeatData = ref({
    sectionSettings: {
      title: 'Мясные блюда',
    },
    dataSettings: {
      needSlider: true,
      productsCode: productsEnum.meat.code,
    },
  });
</script>
