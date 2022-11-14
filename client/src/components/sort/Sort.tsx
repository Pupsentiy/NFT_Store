import React, { useState } from "react";
import styled from "styled-components";

import { setSort } from "../../redux/filter/filterSlice";
import { SortPropertyEnum } from "../../redux/filter/types";
import { useAppDispatch, useAppSelector } from "../../redux/store";

import arrow from "../../assets/icons/discover_logo/arrow.svg";

export const WrapperSortEl = styled.div`
  position: relative;
  border: solid 1px #1e50ff;
  font-size: 14px;
  border-radius: 8px 8px 0px 0px;
  height: 50px;
  display: flex;
  align-items: center;
  background: rgba(30, 80, 255, 0.1019607843);
  cursor: pointer;
  margin-right:10px;
`;

export const LabelNameEl = styled.span`
  width: 115px;
  padding: 16px 0px;
  text-align:center;
`;
export const LabelImg = styled.img<{ open: boolean }>`
  margin-right: 10px;
  rotate: ${(props) => (props.open ? '360deg'  : '180deg')};
`;

export const SortList = styled.ul`
  position: absolute;
  z-index: 10;
  border: solid 2px #1e50ff;
  top: 50px;
  width: 137px;
  cursor: pointer;
  left: -1px;
  border-radius: 0px 0px 8px 8px;
  background: rgb(30 80 255 / 89%);
`;
export const ListItem = styled.li`
  padding: 8px;
  &:hover {
    background: rgb(0 21 92);
  }
`;

type SortItem = {
  name: string;
  sortProperty: SortPropertyEnum;
};

type PopupClick = MouseEvent & {
  path: Node[];
};

const sortList: SortItem[] = [
  { name: "price (DESC)", sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: "price (ASC)", sortProperty: SortPropertyEnum.PRICE_ASC },
  { name: "alphabetically (DESC)", sortProperty: SortPropertyEnum.NAME_DESC },
  { name: "alphabetically (ASC)", sortProperty: SortPropertyEnum.NAME_ASC },
];

const Sort: React.FC = () => {
  const dispatch = useAppDispatch();
  const { sort } = useAppSelector((state) => state.filters);
  const [open, setOpen] = useState<boolean>(false);
  const sortRef = React.useRef<HTMLDivElement>(null);

  const selectSort = (obj: SortItem) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  React.useEffect(() => {
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
