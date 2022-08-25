export enum Status {
  LOADING = "loading",
  SUCCESS = "completed",
  ERROR = "error",
}

export type Platforms = {
  id: number;
  logo: string;
  site: string;
  alt: string;
};

export interface PlatformsSliceState {
  platforms: Platforms[];
  statusPlatform: Status;
}
