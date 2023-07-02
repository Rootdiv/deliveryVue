import { nuxtContext } from '@nuxt/types';
import { IProduct } from '@/types/ProductInterface.ts';

export default (context: nuxtContext) => {
  class ProductService {
    private static productMethods = context.$api.product;

    private static productAdapters = context.$adapters.product;

    private static products: any = {};

    setProducts(code: string, products: IProduct[]) {
      if (!ProductService.products[code]) {
        ProductService.products[code] = products;
      }
    }

    async getProducts(params: any = {}) {
      const result = (await ProductService.productMethods.getProducts({ ...params, _limit: 10 })) || [];

      if (!result.length) return [];

      const mappedResult = ProductService.productAdapters
        .getProducts(result)
        .map((productModel: IProduct) => productModel.toObject());

      this.setProducts(params.code, mappedResult);

      return mappedResult;
    }
  }
  context.$services.product = new ProductService();
};
