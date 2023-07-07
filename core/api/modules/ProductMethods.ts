import { nuxtContext } from '@nuxt/types';
import { IEndpoints } from '@/types/IEndpointsInterface.ts';

export default (context: nuxtContext) => {
  class ProductMethods {
    private static endpoints: IEndpoints = context.$configs.endpoints;

    async getProducts(params = {}) {
      const config = ProductMethods.endpoints.product.getProducts(params);
      const result = await context.$services.useAPI.request({ config });
      return result;
    }
  }

  context.$api.product = new ProductMethods();
};
