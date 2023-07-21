import { ApolloClient, InMemoryCache, createHttpLink, gql, DefaultOptions } from '@apollo/client/core';
import { nuxtContext } from '@nuxt/types';

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

class ApolloService {
  private apolloClient: any;

  constructor(baseURL: string) {
    this.apolloClient = new ApolloClient({
      link: createHttpLink({
        uri: baseURL,
      }),
      cache: new InMemoryCache(),
      defaultOptions,
    });
  }

  async request({ config = {}, params = {} }: any) {
    try {
      const requestData: any = {
        ...params,
        [config.method]: gql(config.data),
      };
      const result = await this.apolloClient[config.method](requestData);
      return result;
    } catch (error) {
      return error;
    }
  }
}

export default ({ $config }: nuxtContext) => new ApolloService($config.public.baseApiUrl);
