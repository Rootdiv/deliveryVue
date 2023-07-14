import { nuxtContext } from '@nuxt/types';

export default (context: nuxtContext) => {
  const enums = {
    products: {
      cold: {
        code: 'cold',
      },
      hot: {
        code: 'hot',
      },
      meat: {
        code: 'meat',
      },
    },
    banners: {
      main: {
        code: 'main',
      },
    },
    deliveryTypes: {
      pickup: {
        value: 'pickup',
        text: 'Самовывоз',
      },
      delivery: {
        value: 'delivery',
        text: 'Доставка',
      },
    },
  } as const;

  context.$configs.enums = enums;
};
