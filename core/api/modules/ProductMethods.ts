import { nuxtContext } from '@nuxt/types';

export default (context: nuxtContext) => {
  class ProductMethods {
    private static graphqlEndpoints = context.$configs.graphqlEndpoints;

    async getProducts(params = {}) {
      const config = ProductMethods.graphqlEndpoints.product.getProducts;
      const result = await context.$services.useApollo.request({ config, params });
      return result?.data?.allProducts || [];
    }
  }

  context.$api.product = new ProductMethods();
};
