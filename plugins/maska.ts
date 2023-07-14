import { nuxtContext } from '@nuxt/types';
import { vMaska } from 'maska';

export default defineNuxtPlugin((context: nuxtContext) => {
  context.vueApp.directive('maska', vMaska);
});
