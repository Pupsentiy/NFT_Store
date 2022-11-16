import { SortPropertyEnum } from "../../redux/filter/types";

export type SortItem = {
  name: string;
  sortProperty: SortPropertyEnum;
};

export type PopupClick = MouseEvent & {
  path: Node[];
};
