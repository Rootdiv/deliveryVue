import { nuxtContext } from '@nuxt/types';
import { ICartItem } from '@/types/CartInterface.ts';
import { IProduct } from '@/types/ProductInterface.ts';

export default (context: nuxtContext) => {
  class CartItemModel implements ICartItem {
    count: number | null;

    product: IProduct | null;

    constructor() {
      this.count = null;
      this.product = null;
    }

    toObject() {
      return {
        count: this.count,
        product: this.product?.toObject() || null,
      };
    }

    addCount() {
      this.count = this.count === null ? 1 : this.count + 1;
    }

    reduceCount() {
      this.count = this.count === null ? null : this.count - 1;
    }
  }
  context.$models.cartItem = CartItemModel;
};
