import { filename } from 'pathe/utils';
import { nuxtContext } from '@nuxt/types';
import { IPromo } from '@/types/PromoInterface.ts';

const imagesGlobal = import.meta.glob('@/assets/images/promotions/fake/*', { eager: true });
const images = Object.fromEntries(Object.entries(imagesGlobal).map(([key, value]) => [filename(key), value.default]));

export default (context: nuxtContext) => {
  class PromoFabric {
    private static PromoModel = context.$models.promo;

    create({ id, title, description, image, time }: IPromo) {
      const promo: IPromo = new PromoFabric.PromoModel();

      const isPromoImageString = typeof image === 'string';

      promo.id = id || Date.now();
      promo.title = title || '';
      promo.description = description || '';
      promo.image = isPromoImageString
        ? {
            src: images[image],
            alt: '',
          }
        : image;
      promo.time = time || '';
      return promo;
    }
  }

  context.$fabrics.promo = new PromoFabric();
};
