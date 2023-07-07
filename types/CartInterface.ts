import { IProduct, IProductData } from '@/types/ProductInterface.ts';

export interface ICartItem {
  count: number | null;
  product: IProduct | null;
  toObject: () => {
    count: number | null;
    product: IProductData | null;
  };
  addCount: () => void;
  reduceCount: () => void;
}
