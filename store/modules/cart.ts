import { defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';
import { ICartItem } from '@/types/CartInterface.ts';

export default defineStore('cart', () => {
  const cartState = ref<ICartItem[]>([]);

  let cartService: any = null;
  if (process.client) {
    setTimeout(() => {
      const root = useNuxtApp();
      cartService = root.$services.cart;
      cartState.value = cartService.getCart();
    });
  }

  const cart = computed(() => cartState.value);

  const cartItemsCount = computed(() => cartState.value.reduce((total, { count }) => total + (count || 0), 0));

  const finalPrice = computed(() =>
    cartState.value.reduce((total, { count, product }: ICartItem) => {
      const price = product && product.price ? product?.price : 0;
      const productCount = count || 0;
      return total + productCount * price;
    }, 0),
  );

  const setCartItem = (cartItem: ICartItem) => {
    cartState.value.push(cartItem);
  };

  const addCartItem = (cartItem: ICartItem) => {
    cartItem.addCount();
    cartService.saveCart(cartState.value);
  };

  const deleteCartItem = (cartItem: ICartItem | undefined, isAll = false) => {
    if (!isAll && cartItem && cartItem.count && cartItem.count > 1) {
      cartItem.reduceCount();
    } else {
      const itemIndex = cartState.value.findIndex((item: ICartItem) => item?.product?.id === cartItem?.product?.id);
      if (itemIndex !== -1) {
        cartState.value.splice(itemIndex, 1);
      }
    }
  };

  const clearCart = () => {
    cartState.value = [];
  };

  watch(
    cartState,
    () => {
      cartService.saveCart(cartState.value);
    },
    { deep: true },
  );

  return { cart, setCartItem, addCartItem, deleteCartItem, cartItemsCount, finalPrice, clearCart };
});
