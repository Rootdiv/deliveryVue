<template>
  <div class="cart-order-wrapper">
    <div class="cart-order">
      <div class="info">
        <p class="price">
          Итого: <span class="price-sum">{{ finalPriceLocal }} &#8381;</span>
        </p>
        <p v-if="isFreeDelivery" class="free-delivery">Доставка бесплатная</p>
        <p v-else class="free-delivery">
          До бесплатной доставки не хватает: <span>{{ freeNeedPrice }} &#8381;</span>
        </p>
        <p class="minimal-delivery">Минимальная сума заказа {{ minimalDeliveryPrice }} &#8381;</p>
      </div>
      <button type="button" class="button" :disabled="!isMinimalDelivery">Оформить заказ</button>
    </div>
  </div>
</template>

<script setup>
  import { storeToRefs } from 'pinia';
  import useSettingsStore from '@/store/modules/settings.ts';
  import useCartStore from '@/store/modules/cart.ts';

  const { finalPrice } = storeToRefs(useCartStore());
  const { freeDeliveryPrice, minimalDeliveryPrice, deliveryPrice } = storeToRefs(useSettingsStore());

  const freeNeedPrice = computed(() => freeDeliveryPrice.value - finalPrice.value);
  const isFreeDelivery = computed(() => finalPrice.value >= freeDeliveryPrice.value);
  const finalPriceLocal = computed(() => {
    if (!finalPrice.value) return 0;
    return isFreeDelivery.value ? finalPrice.value : finalPrice.value + deliveryPrice.value;
  });
  const isMinimalDelivery = computed(() => finalPriceLocal.value >= minimalDeliveryPrice.value);
</script>

<style lang="scss" scoped>
  $background-light: $BACKGROUND-LIGHT;
  $white: $WHITE;
  $gray: $GRAY;

  .cart-order {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    border-radius: 1rem;
    margin: 0 auto;
    background: $background-light;

    @include tablet-desktop {
      max-width: 76.3rem;
    }

    @include mobile {
      flex-direction: column;
      row-gap: 2rem;
      text-align: center;
    }

    &-wrapper {
      margin-top: 5rem;
    }

    .info {
      display: flex;
      flex-direction: column;
      row-gap: 0.8rem;
    }

    .price {
      &:not(&-sum) {
        color: #a6a7ab;
        font-family: 'Gilroy Medium';
        font-size: 1.8rem;
        line-height: 2.1rem;
      }

      &-sum {
        color: $white;
        font-family: 'Gilroy Bold';
        font-size: 2.5rem;
        line-height: 3rem;
      }
    }

    .free-delivery {
      font-family: 'Gilroy Medium';
      font-size: 1.2rem;
      line-height: 1.4rem;

      &:not(span) {
        color: $white;
      }

      span {
        color: #72a479;
      }
    }

    .minimal-delivery {
      color: $white;
      font-family: Gilroy;
      font-size: 1.2rem;
      line-height: 1.4rem;
    }

    .button {
      width: 100%;
      max-width: 20.9rem;
      padding: 1.7rem 2rem;
      border: none;
      border-radius: 1rem;
      color: $white;
      cursor: pointer;
      font-family: 'Gilroy Bold';
      font-size: 1.4rem;
      line-height: 1.7rem;

      &:not(&:disabled) {
        background: linear-gradient(114.93deg, #618967 5.11%, #72a479 94%);
      }

      @include hover {
        transition: all 0.3s ease;

        &:not(&:disabled):hover {
          box-shadow: 0 0.5rem 1rem rgba(114, 163, 121, 70%);
        }
      }

      &:not(&:disabled):focus {
        box-shadow: 0 0.5rem 1rem rgba(114, 163, 121, 70%);
      }

      &:disabled {
        background: $gray;
      }
    }
  }
</style>
