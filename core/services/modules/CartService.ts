import { nuxtContext } from '@nuxt/types';
import useCartStore from '@/store/modules/cart.ts';
import { ICartItem } from '@/types/CartInterface.ts';
import { IProduct } from '@/types/ProductInterface.ts';
import { storeToRefs } from 'pinia';
import useSettingsStore from '@/store/modules/settings.ts';

export default (context: nuxtContext) => {
  const cartStore = useCartStore();
  const settingsStore = useSettingsStore();

  class CartService {
    private static cartAdapter = context.$adapters.cart;

    findCardCartItemById(id: number) {
      const { cart } = storeToRefs(cartStore);
      return cart.value.find(({ product }: ICartItem) => product?.id === id);
    }

    getCart() {
      const cartFromStorage = JSON.parse(localStorage.getItem('nuxt-cart') || 'null') || [];
      return CartService.cartAdapter.getCartItems(cartFromStorage);
    }

    saveCart(items: ICartItem[]) {
      const preparedItems = items.map((item) => item.toObject());
      localStorage.setItem('nuxt-cart', JSON.stringify(preparedItems));
      const { finalPrice } = cartStore;
      const { minimalDeliveryPrice } = settingsStore;
      useCookie('order-page-access').value = finalPrice >= minimalDeliveryPrice;
    }

    addToCart(item: IProduct) {
      const { addCartItem, setCartItem } = cartStore;
      const cartItem = this.findCardCartItemById(item.id || -1);
      if (cartItem?.product?.id) {
        addCartItem(cartItem);
      } else {
        setCartItem(CartService.cartAdapter.getCartItem({ product: item }));
      }
    }

    removeFromCart(item: IProduct, isAll = false) {
      const { deleteCartItem } = cartStore;
      deleteCartItem(this.findCardCartItemById(item.id), isAll);
    }

    clearAllOfProduct(item: IProduct) {
      this.removeFromCart(item, true);
    }
  }
  context.$services.cart = new CartService();
};
