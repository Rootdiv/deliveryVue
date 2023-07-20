<template>
  <v-section class="cart" title="Корзина">
    <client-only>
      <block-cart-list v-if="cart.length" :list="cart" />
      <p v-else class="cart__empty">Корзина пуста</p>
      <block-cart-order-info />
    </client-only>
  </v-section>
</template>

<script setup>
  import BlockCartList from '@/components/Cart/BlockCartList.vue';
  import BlockCartOrderInfo from '@/components/Cart/BlockCartOrderInfo.vue';
  import { storeToRefs } from 'pinia';
  import useCartStore from '@/store/modules/cart.ts';

  const { cart } = storeToRefs(useCartStore());

  defineEmits(['vnode-unmounted']);
</script>
