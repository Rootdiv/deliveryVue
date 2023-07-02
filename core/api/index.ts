import { nuxtContext } from '@nuxt/types';
import { coreFunctionList } from '@/types/ICore.ts';
import BannerMethods from '@/core/api/modules/BannerMethods.ts';

const modelList: coreFunctionList = [BannerMethods];

export default (context: nuxtContext) => {
  class ApiLocator {}
  context.$api = new ApiLocator();
  modelList.forEach((fn) => fn(context));
};
