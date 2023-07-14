import { nuxtContext } from '@nuxt/types';
import { required, helpers, minLength, maxLength } from '@vuelidate/validators';

export default (context: nuxtContext) => {
  const validationRules = {
    required: (rule: any) => {
      const name = rule?.name ? `"${rule.name}"` : '';
      const message = rule?.customMessage || `Поле ${name} обязательно для заполнения`;
      const validator = rule?.validator || required;
      return helpers.withMessage(message, validator);
    },
    minLength: (rule: any) => {
      const name = rule?.name ? `"${rule.name}"` : '';
      const value = rule?.value || 255;
      const message = rule?.customMessage || `Поле ${name} обязательно для заполнения`;
      const validator = rule?.validator || minLength(value);
      return helpers.withMessage(message, validator);
    },
    maxLength: (rule: any) => {
      const name = rule?.name ? `"${rule.name}"` : '';
      const value = rule?.value || 255;
      const message = rule?.customMessage || `Поле ${name} обязательно для заполнения`;
      const validator = rule?.validator || maxLength(value);
      return helpers.withMessage(message, validator);
    },
  };

  context.$configs.validationRules = validationRules;
};
