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

export interface CardsSliceState {
  items: Cards[];
  status: Status;
}

export type SearchCardsParams = {
  category:string;
  currentPage:number;
  search:string;
  order:string;
  sortBy:string;
}