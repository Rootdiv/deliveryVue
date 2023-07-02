export interface IBanner {
  toObject(): unknown;
  id: number | null;

  image:
    | {
        src: string;
        alt: string;
      }
    | string
    | null;
}
