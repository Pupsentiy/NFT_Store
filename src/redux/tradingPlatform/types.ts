export type TraidPlatform = {
    id: number;
    site: string;
    logo: string;
    alt:string;
  };

  export enum Status {
    LOADING = 'loading',
    SUCCESS = 'completed',
    ERROR = 'error',
}

export interface TraidSliceState {
    items: TraidPlatform[];
    status: Status;
  }