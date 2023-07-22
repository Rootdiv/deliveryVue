import { nuxtContext } from '@nuxt/types';
import { IPromo } from '@/types/PromoInterface.ts';

export default (context: nuxtContext) => {
  class PromoService {
    private static promoMethods = context.$api.promo;

    private static promoAdapters = context.$adapters.promo;

    async getPromotions(params = {}) {
      const result = await PromoService.promoMethods.getPromotions(params);

      if (!result?.length) return [];

      return PromoService.promoAdapters.getPromotions(result).map((promoModel: IPromo) => promoModel.toObject());
    }
  }
  context.$services.promo = new PromoService();
};
