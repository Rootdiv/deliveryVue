import { nuxtContext } from '@nuxt/types';
import { coreFunctionList } from '@/types/ICore.ts';
import APIClientService from '@/core/services/modules/APIClientService.ts';
import BannerService from '@/core/services/modules/BannerService.ts';
import ProductService from '@/core/services/modules/ProductService.ts';
import CartService from '@/core/services/modules/CartService.ts';
import ValidatorService from '@/core/services/modules/ValidatorService.ts';

const servicesList: coreFunctionList = [APIClientService, BannerService, ProductService, CartService, ValidatorService];

export default (context: nuxtContext) => {
  class ServicesLocator {}
  context.$services = new ServicesLocator();
  servicesList.forEach((fn) => fn(context));
};
