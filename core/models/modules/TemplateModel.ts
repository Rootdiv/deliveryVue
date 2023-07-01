import { nuxtContext } from '@nuxt/types';

export default (context: nuxtContext) => {
  class TemplateModel {
    static getInfo() {
      return 123;
    }
  }

  context.$models.template = TemplateModel;
};
