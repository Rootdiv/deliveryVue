import { nuxtContext } from '@nuxt/types';
import getProductsQuery from '@/graphql/products/queries/getProducts.ts';
import getBannersQuery from '@/graphql/banners/queries/getBanners.ts';
import getPromotionsQuery from '@/graphql/promotions/queries/getPromotions.ts';

export default (context: nuxtContext) => {
  const graphqlEndpoints = {
    banner: {
      getBanners: { data: getBannersQuery, method: 'query' },
    },

    product: {
      getProducts: { data: getProductsQuery, method: 'query' },
    },

    promo: {
      getPromotions: { data: getPromotionsQuery, method: 'query' },
    },
  };

  context.$configs.graphqlEndpoints = graphqlEndpoints;
};
