import { nuxtContext } from '@nuxt/types';

import FetchService from '@/core/services/modules/apiServices/FetchService.ts';
import ApolloServices from '@/core/services/modules/apiServices/ApolloServices.ts';

export default (context: nuxtContext) => {
  class APIClientService {
    client: any;

    context: nuxtContext;

    constructor(client: any, context: nuxtContext) {
      this.client = client;
      this.context = context;
    }

    async request(data = {}) {
      return this.client.request(data);
    }
  }
  context.$services.useAPI = new APIClientService(FetchService(context), context);
  context.$services.useApollo = new APIClientService(ApolloServices(context), context);
};
