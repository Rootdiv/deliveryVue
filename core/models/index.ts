import { nuxtContext } from '@nuxt/types';
import { coreFunctionList } from '@/types/ICore.ts';
import BannerModel from '@/core/models/modules/BannerModel.ts';
import ProductModel from '@/core/models/modules/ProductModel.ts';
import CartItemModel from '@/core/models/modules/CartItemModel.ts';
import PromoModel from '~/core/models/modules/PromoModel.ts';

const modelList: coreFunctionList = [BannerModel, ProductModel, CartItemModel, PromoModel];

export default (context: nuxtContext) => {
  class ModelsLocator {}
  context.$models = new ModelsLocator();
  modelList.forEach((fn) => fn(context));
};
