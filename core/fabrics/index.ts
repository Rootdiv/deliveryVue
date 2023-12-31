import { nuxtContext } from '@nuxt/types';
import { coreFunctionList } from '@/types/ICore.ts';
import BannerFabric from '@/core/fabrics/modules/BannerFabric.ts';
import ProductFabric from '@/core/fabrics/modules/ProductFabric.ts';
import CartItemFabric from '@/core/fabrics/modules/CartItemFabric.ts';
import PromoFabric from '@/core/fabrics/modules/PromoFabric.ts';

const fabricList: coreFunctionList = [BannerFabric, ProductFabric, CartItemFabric, PromoFabric];

export default (context: nuxtContext) => {
  class FabricLocator {}
  context.$fabrics = new FabricLocator();
  fabricList.forEach((fn) => fn(context));
};
