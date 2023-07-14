import { nuxtContext } from '@nuxt/types';

export default (context: nuxtContext) => {
  class ValidatorService {
    private static rulesConfig = context.$configs.validationRules;

    generateRules(data = []) {
      const result: any = [];
      data.forEach((item: any) => {
        result[item.fieldName] = {};
        const rules = item.rules || {};

        Object.entries(rules).forEach(([rule, value]) => {
          result[item.fieldName][rule] = ValidatorService.rulesConfig[rule](value);
        });
      });
      return result;
    }
  }

  context.$services.validator = new ValidatorService();
};
