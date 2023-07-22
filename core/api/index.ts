import { nuxtContext } from '@nuxt/types';
import { coreFunctionList } from '@/types/ICore.ts';
import BannerMethods from '@/core/api/modules/BannerMethods.ts';
import ProductMethods from '@/core/api/modules/ProductMethods.ts';
import PromoMethods from '@/core/api/modules/PromoMethods.ts';

const modelList: coreFunctionList = [BannerMethods, ProductMethods, PromoMethods];

export default (context: nuxtContext) => {
  class ApiLocator {}
  context.$api = new ApiLocator();
  modelList.forEach((fn) => fn(context));
};
