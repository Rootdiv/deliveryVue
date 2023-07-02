import { nuxtContext } from '@nuxt/types';
import { IProduct } from '@/types/ProductInterface.ts';

export default (context: nuxtContext) => {
  class ProductModel implements IProduct {
    id: number | null;

    title: string | null;

    description: string | null;

    weight: number | null;

    code: string | null;

    price: number | null;

    image: string | { src: string; alt: string } | null;

    constructor() {
      this.id = null;
      this.title = null;
      this.description = null;
      this.weight = null;
      this.code = null;
      this.price = null;
      this.image = null;
    }

    toObject() {
      const { id, title, description, weight, code, price, image } = this;
      return {
        id,
        title,
        description,
        weight,
        code,
        price,
        image,
      };
    }
  }

  context.$models.product = ProductModel;
};
