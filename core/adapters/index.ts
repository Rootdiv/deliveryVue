import { nuxtContext } from '@nuxt/types';
import { coreFunctionList } from '@/types/ICore.ts';
import BannerAdapter from '@/core/adapters/modules/BannerAdapter.ts';
import ProductAdapter from '@/core/adapters/modules/ProductAdapter.ts';
import CartAdapter from '@/core/adapters/modules/CartAdapter.ts';

const adapterList: coreFunctionList = [BannerAdapter, ProductAdapter, CartAdapter];

export default (context: nuxtContext) => {
  class AdapterLocator {}
  context.$adapters = new AdapterLocator();
  adapterList.forEach((fn) => fn(context));
};
