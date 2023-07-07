export interface IProductData {
  toObject(): unknown;
  id: number | null;
  title: string | null;
  description: string | null;
  weight: number | null;
  code: string | null;
  price: number | null;
  image:
    | {
        src: string;
        alt: string;
      }
    | string
    | null;
}

export interface IProduct extends IProductData {
  toObject: () => IProductData;
}
