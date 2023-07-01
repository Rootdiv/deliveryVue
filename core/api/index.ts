import { nuxtContext } from '@nuxt/types';
import { coreFunctionList } from '@/types/ICore.ts';
import TemplateMethods from '@/core/api/modules/TemplateMethods.ts';

const modelList: coreFunctionList = [TemplateMethods];

export default (context: nuxtContext) => {
  class ApiLocator {}
  context.$api = new ApiLocator();
  modelList.forEach(fn => fn(context));
};
