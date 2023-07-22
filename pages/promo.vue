<template>
  <v-section class="promo" title="Акции">
    <client-only>
      <block-promo-list
        v-if="promotions.length"
        :list="promoAdapter.getPromotions(promotions || [])"
        :loading="pending" />
      <p v-else class="promo__empty">На данный момент акций нет</p>
    </client-only>
  </v-section>
</template>

<script setup>
  import BlockPromoList from '@/components/Promo/BlockPromoList.vue';

  const root = useNuxtApp();

  const { promo: promoService } = root.$services;
  const { promo: promoAdapter } = root.$adapters;

  const { data: promotions, pending } = useAsyncData(() => promoService.getPromotions());

  defineEmits(['vnode-unmounted']);
</script>
