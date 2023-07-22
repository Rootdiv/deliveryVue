<template>
  <v-row tag="ul" class="promo-list">
    <template v-if="loading">
      <v-col v-for="(item, index) in 6" :key="index" :col="4" :md="4" :sm="2" class="promo-item-wrapper">
        <skeleton-promo-item />
      </v-col>
    </template>
    <template v-else>
      <v-col v-for="promoItem in list" :key="promoItem.id" :col="4" :md="4" :sm="2" class="promo-item-wrapper">
        <block-promo-item v-bind="promoItem" />
      </v-col>
    </template>
  </v-row>
</template>

<script setup>
  import SkeletonPromoItem from '~/components/Promo/SkeletonPromoItem.vue';
  import BlockPromoItem from '@/components/Promo/BlockPromoItem.vue';

  defineProps({
    loading: {
      type: Boolean,
      default: true,
    },
    list: {
      type: Array,
      default: () => [],
    },
  });
</script>

<style lang="scss" scoped>
  .promo-list {
    row-gap: 4rem;

    .promo-item-wrapper {
      cursor: pointer;

      @include hover {
        transition: all 0.3s ease;

        &:hover {
          z-index: 1;
          box-shadow: 0 3rem 4.5rem rgba(43, 40, 40, 60%);
          filter: drop-shadow(0 3rem 4.5rem rgba(43, 40, 40, 60%));
        }
      }

      &:has(> .image-wrapper:focus) {
        z-index: 1;
        box-shadow: 0 3rem 4.5rem rgba(43, 40, 40, 60%);
        filter: drop-shadow(0 3rem 4.5rem rgba(43, 40, 40, 60%));
      }
    }
  }
</style>
