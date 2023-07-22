import { nuxtContext } from '@nuxt/types';

export default (context: nuxtContext) => {
  class PromoMethods {
    private static graphqlEndpoints = context.$configs.graphqlEndpoints;

    async getPromotions(params = {}) {
      const config = PromoMethods.graphqlEndpoints.promo.getPromotions;
      const result = await context.$services.useApollo.request({ config, params });
      return result?.data?.allPromotions;
    }
  }

  context.$api.promo = new PromoMethods();
};
