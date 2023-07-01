import { nuxtContext } from '@nuxt/types';
import { coreFunctionList } from '@/types/ICore.ts';
import Template from '@/core/configs/modules/Template.ts';

const configList: coreFunctionList = [Template];

export default (context: nuxtContext) => {
  class ConfigsLocator {}
  context.$configs = new ConfigsLocator();
  configList.forEach(fn => fn(context));
};
