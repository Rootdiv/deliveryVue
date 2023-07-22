import { nuxtContext } from '@nuxt/types';
import { coreFunctionList } from '@/types/ICore.ts';
import BannerAdapter from '@/core/adapters/modules/BannerAdapter.ts';
import ProductAdapter from '@/core/adapters/modules/ProductAdapter.ts';
import CartAdapter from '@/core/adapters/modules/CartAdapter.ts';
import PromoAdapter from '@/core/adapters/modules/PromoAdapter.ts';

const adapterList: coreFunctionList = [BannerAdapter, ProductAdapter, CartAdapter, PromoAdapter];

export default (context: nuxtContext) => {
  class AdapterLocator {}
  context.$adapters = new AdapterLocator();
  adapterList.forEach((fn) => fn(context));
};
