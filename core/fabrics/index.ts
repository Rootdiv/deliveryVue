import { nuxtContext } from '@nuxt/types';
import { coreFunctionList } from '@/types/ICore.ts';
import BannerFabric from '@/core/fabrics/modules/BannerFabric.ts';

const fabricList: coreFunctionList = [BannerFabric];

export default (context: nuxtContext) => {
  class FabricLocator {}
  context.$fabrics = new FabricLocator();
  fabricList.forEach((fn) => fn(context));
};
