interface IPromoData {
  id: number | null;
  title: string | null;
  description: string | null;
  time: string | null;
  image:
    | {
        src: string;
        alt: string;
      }
    | string
    | null;
}

export interface IPromo extends IPromoData {
  toObject: () => IPromoData;
}
