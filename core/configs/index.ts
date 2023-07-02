import { nuxtContext } from '@nuxt/types';
import { coreFunctionList } from '@/types/ICore.ts';
import Endpoints from '@/core/configs/modules/Endpoints.ts';

const configList: coreFunctionList = [Endpoints];

export default (context: nuxtContext) => {
  class ConfigsLocator {}
  context.$configs = new ConfigsLocator();
  configList.forEach((fn) => fn(context));
};
