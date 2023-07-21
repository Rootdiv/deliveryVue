import { nuxtContext } from '@nuxt/types';
import getProductsQuery from '@/graphql/products/queries/getProducts.ts';
import getBannersQuery from '@/graphql/banners/queries/getBanners.ts';

export default (context: nuxtContext) => {
  const graphqlEndpoints = {
    banner: {
      getBanners: { data: getBannersQuery, method: 'query' },
    },

    product: {
      getProducts: { data: getProductsQuery, method: 'query' },
    },
  };

  context.$configs.graphqlEndpoints = graphqlEndpoints;
};
