type RESTMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface endpointConfig {
  readonly url: string;
  readonly method: RESTMethods;
  readonly params?: object;
  readonly headers?: object;
}

interface IBannerEndpoints {
  getBanners(params?: object): endpointConfig;
}

interface IProductEndpoints {
  getProducts(params?: object): endpointConfig;
}

export interface IEndpoints {
  banner: IBannerEndpoints;
  product: IProductEndpoints;
}
