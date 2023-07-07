import { nuxtContext } from '@nuxt/types';
import { ICartItem } from '@/types/CartInterface.ts';

export default (context: nuxtContext) => {
  class CartItemFabric {
    private static CartItemModel = context.$models.cartItem;

    create({ count, product }: ICartItem) {
      const cartItem: ICartItem = new CartItemFabric.CartItemModel();
      cartItem.count = count || 1;
      cartItem.product = product || null;
      return cartItem;
    }
  }
  context.$fabrics.cartItem = new CartItemFabric();
};
