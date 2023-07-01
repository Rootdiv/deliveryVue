import { Context } from '@nuxt/types';

declare module '@nuxt/types' {
  interface nuxtContext extends Context {
    vueApp: any;
    $services: any;
    $models: any;
    $fabrics: any;
    $configs: any;
    $api: any;
    $adapters: any;
  }
}
