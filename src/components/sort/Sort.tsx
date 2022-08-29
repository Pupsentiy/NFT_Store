import React, { useState } from "react";
import { setSort } from "../../redux/filter/filterSlice";
import { SortPropertyEnum } from "../../redux/filter/types";
import { useAppDispatch } from "../../redux/store";

type SortItem = {
  name: string;
  sortProperty: SortPropertyEnum;
};

const sortList: SortItem[] = [
  { name: "price (DESC)", sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: "price (ASC)", sortProperty: SortPropertyEnum.PRICE_ASC },
  { name: "alphabetically (DESC)", sortProperty: SortPropertyEnum.NAME_DESC },
  { name: "alphabetically (ASC)", sortProperty: SortPropertyEnum.NAME_ASC },
];

const Sort: React.FC = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('')
  const selectSort = (obj: SortItem) => {
    dispatch(setSort(obj));
    setValue(obj.name)
  };

  return (
    <div className="sort-select">
        {sortList &&
          sortList.map((obj:SortItem, i: number) => (
            <select onClick={() => selectSort(obj)}  className="sort-select" >
            <option
              key={i}
              value={obj.name}
              className="sort-select-item"
            >
            </option>
      </select>
          ))}
    </div>
  );
};

export default Sort;
