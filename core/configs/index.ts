import { nuxtContext } from '@nuxt/types';

import Constants from '@/core/configs/modules/Constants.ts';
import Endpoints from '@/core/configs/modules/Endpoints.ts';
import Enums from '@/core/configs/modules/Enums.ts';
import ValidationRules from '@/core/configs/modules/ValidationRules.ts';
import GraphqlEndpoints from '@/core/configs/modules/graphqlEndpoints.ts';

const configsList = [Constants, Endpoints, Enums, ValidationRules, GraphqlEndpoints];

export default (context: nuxtContext) => {
  class ConfigsLocator {}
  context.$configs = new ConfigsLocator();
  configsList.forEach((fn) => fn(context));
};
