import { nuxtContext } from '@nuxt/types';
import { IEndpoints } from '@/types/IEndpointsInterface.ts';

export default (context: nuxtContext) => {
  class BannerMethods {
    private static endpoints: IEndpoints = context.$configs.endpoints;

    async getBanners(params = {}) {
      const config = BannerMethods.endpoints.banner.getBanners(params);
      const result = await context.$services.useAPI.request({ config });
      return result;
    }
  }

  context.$api.banner = new BannerMethods();
};
