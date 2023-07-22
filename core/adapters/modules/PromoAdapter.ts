import { nuxtContext } from '@nuxt/types';
import { IPromo } from '@/types/PromoInterface.ts';

export default (context: nuxtContext) => {
  class PromoAdapter {
    private static promoFabric = context.$fabrics.promo;

    getPromo(promo: IPromo) {
      return PromoAdapter.promoFabric.create(promo);
    }

    getPromotions(promotions: IPromo[]) {
      return promotions.map(this.getPromo);
    }
  }

  context.$adapters.promo = new PromoAdapter();
};
