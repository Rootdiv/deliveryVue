import { nuxtContext } from '@nuxt/types';
import { coreFunctionList } from '@/types/ICore.ts';
import BannerAdapter from '@/core/adapters/modules/BannerAdapter.ts';
import ProductAdapter from '@/core/adapters/modules/ProductAdapter.ts';

const adapterList: coreFunctionList = [BannerAdapter, ProductAdapter];

export default (context: nuxtContext) => {
  class AdapterLocator {}
  context.$adapters = new AdapterLocator();
  adapterList.forEach((fn) => fn(context));
};
