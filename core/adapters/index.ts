import { nuxtContext } from '@nuxt/types';
import { coreFunctionList } from '@/types/ICore.ts';
import TemplateAdapter from '@/core/adapters/modules/TemplateAdapter.ts';

const adapterList: coreFunctionList = [TemplateAdapter];

export default (context: nuxtContext) => {
  class AdapterLocator {}
  context.$adapters = new AdapterLocator();
  adapterList.forEach(fn => fn(context));
};
