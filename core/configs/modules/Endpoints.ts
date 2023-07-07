import { nuxtContext } from '@nuxt/types';
import { IEndpoints } from '@/types/IEndpointsInterface.ts';

export default (context: nuxtContext) => {
  const endpoints: IEndpoints = {
    banner: {
      getBanners: (params = {}) => ({ url: '/banners', method: 'GET', params }),
    },
    product: {
      getProducts: (params = {}) => ({ url: '/products', method: 'GET', params }),
    },
  };

  context.$configs.endpoints = endpoints;
};
