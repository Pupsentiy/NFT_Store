import React, { useState } from "react";
import { setSort } from "../../redux/filter/filterSlice";
import { SortPropertyEnum } from "../../redux/filter/types";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import arrow from "../../assets/icons/discover_logo/arrow.svg";
import "./Sort.scss";

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
  const { sort } = useAppSelector((state) => state.filters);
  const dispatch = useAppDispatch();
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
    <div className="sort-select" ref={sortRef}>
      <div className="sort-select" onClick={() => setOpen(!open)}>
        <span>{sort.name}</span>
        <img src={arrow} alt="arrow" className={open === true ? 'active' : ''}/>
        {open && (
          <ul className="sort-list">
            {sortList.map((obj: SortItem, i: number) => (
              <li
                key={i}
                className="sort-select-item"
                onClick={() => selectSort(obj)}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sort;
