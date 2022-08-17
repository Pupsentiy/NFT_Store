export enum Status {
  LOADING = "loading",
  SUCCESS = "completed",
  ERROR = "error",
}

export type Cards = {
  id: number;
  name: string;
  price: number;
  img: string;
  avatar: string;
  author: string;
  category:string;
};

export type Platforms = {
  id: number;
  logo: string;
  site: string;
  alt: string;
};

export interface CardsSlice {
  cards: Cards[];
  platform: Platforms[];
}

export interface CardsSliceState {
  items: CardsSlice[];
  status: Status;
}
