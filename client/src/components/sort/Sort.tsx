import React, { useEffect, useState } from "react";

import { setSort } from "../../redux/filter/filterSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {sortList} from "../../utils/constants/constants";


import arrow from "../../assets/icons/discover_logo/arrow.svg";
import {
  LabelImg,
  LabelNameEl,
  ListItem,
  SortList,
  WrapperSortEl,
} from "./Sort.styled";
import { PopupClick, SortItem } from "./Sort.types";



const Sort: React.FC = () => {
  const dispatch = useAppDispatch();
  const { sort } = useAppSelector((state) => state.filters);
  const [open, setOpen] = useState<boolean>(false);
  const sortRef = React.useRef<HTMLDivElement>(null);

  const selectSort = (obj: SortItem) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as PopupClick;

      if (sortRef.current && !_event.path.includes(sortRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <WrapperSortEl
      className="sort-select"
      onClick={() => setOpen(!open)}
      ref={sortRef}
      open={open}
    >
      <LabelNameEl>{sort.name}</LabelNameEl>
      <LabelImg src={arrow} alt="arrow" open={open} />
      {open && (
        <SortList>
          {sortList.map((obj: SortItem, i: number) => (
            <ListItem key={i} onClick={() => selectSort(obj)}>
              {obj.name}
            </ListItem>
          ))}
        </SortList>
      )}
    </WrapperSortEl>
  );
};

export default Sort;
