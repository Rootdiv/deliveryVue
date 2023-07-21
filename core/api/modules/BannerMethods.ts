import { nuxtContext } from '@nuxt/types';

export default (context: nuxtContext) => {
  class BannerMethods {
    private static graphqlEndpoints = context.$configs.graphqlEndpoints;

    async getBanners(params = {}) {
      const config = BannerMethods.graphqlEndpoints.banner.getBanners;
      const result = await context.$services.useApollo.request({ config, params });
      return result?.data?.allBanners;
    }
  }

  context.$api.banner = new BannerMethods();
};
