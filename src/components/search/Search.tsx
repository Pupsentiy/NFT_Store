import React, { useCallback, useRef, useState } from "react";
import { setCurrentPage, setSearchValue } from "../../redux/filter/filterSlice";
import { useAppDispatch } from "../../redux/store";
import debounce from "lodash.debounce";
import "./Search.scss";

const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
    dispatch(setCurrentPage(1))
  };

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 250),
    []
  );

  return (
    <>
      <input
        type="text"
        className="search"
        placeholder="Type your keywords . . ."
        onChange={onChangeInput}
        ref={inputRef}
        value={value}
      />
    </>
  );
};

export default Search;
