interface IBannerData {
  id: number | null;

  image:
    | {
        src: string;
        alt: string;
      }
    | string
    | null;
}

export interface IBanner extends IBannerData {
  toObject: () => IBannerData;
}
