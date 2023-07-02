import { filename } from 'pathe/utils';
import { nuxtContext } from '@nuxt/types';
import { IBanner } from '@/types/BannerInterface.ts';

const imagesGlobal = import.meta.glob('@/assets/images/banners/fake/*', { eager: true });
const images = Object.fromEntries(Object.entries(imagesGlobal).map(([key, value]) => [filename(key), value.default]));

export default (context: nuxtContext) => {
  class BannerFabric {
    private static BannerModel = context.$models.banner;

    create({ id, image }: IBanner) {
      const banner: IBanner = new BannerFabric.BannerModel();

      const isBannerImageString = typeof image === 'string';

      banner.id = id || Date.now();
      banner.image = isBannerImageString
        ? {
            src: images[image],
            alt: '',
          }
        : image;
      return banner;
    }
  }

  context.$fabrics.banner = new BannerFabric();
};
