import { nuxtContext } from '@nuxt/types';
import { IPromo } from '@/types/PromoInterface.ts';

export default (context: nuxtContext) => {
  class PromoModel implements IPromo {
    id: number | null;

    title: string | null;

    description: string | null;

    image:
      | {
          src: string;
          alt: string;
        }
      | string
      | null;

    time: string | null;

    constructor() {
      this.id = null;
      this.title = null;
      this.description = null;
      this.image = null;
      this.time = null;
    }

    toObject() {
      return {
        id: this.id,
        title: this.title,
        description: this.description,
        image: this.image,
        time: this.time,
      };
    }
  }

  context.$models.promo = PromoModel;
};
