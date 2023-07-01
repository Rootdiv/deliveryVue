import { nuxtContext } from '@nuxt/types';
import { coreFunctionList } from '@/types/ICore.ts';
import TemplateFabric from '@/core/fabrics/modules/TemplateFabric.ts';

const fabricList: coreFunctionList = [TemplateFabric];

export default (context: nuxtContext) => {
  class FabricLocator {}
  context.$fabrics = new FabricLocator();
  fabricList.forEach(fn => fn(context));
};
