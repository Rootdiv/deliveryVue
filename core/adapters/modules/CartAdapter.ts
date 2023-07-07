import { nuxtContext } from '@nuxt/types';
import { ICartItem } from '@/types/CartInterface.ts';

export default (context: nuxtContext) => {
  class CartAdapter {
    private static cartItemFabric = context.$fabrics.cartItem;

    private static productAdapter = context.$adapters.product;

    getCartItem({ count, product }: ICartItem) {
      const updatedProduct = CartAdapter.productAdapter.getProduct(product);
      return CartAdapter.cartItemFabric.create({ count: count || 1, product: updatedProduct });
    }

    getCartItems(cart: ICartItem[]) {
      return cart.map(this.getCartItem);
    }
  }
  context.$adapters.cart = new CartAdapter();
};
