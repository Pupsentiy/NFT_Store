import React, { useCallback, useRef, useState } from "react";
import debounce from "lodash.debounce";
import styled from "styled-components";

import { useAppDispatch } from "../../redux/store";
import { setCurrentPage, setSearchValue } from "../../redux/filter/filterSlice";

export const InputSearchElement = styled.input`
margin-top: 40px;
border: solid 1px #1e50ff;
color: #fff;
font-size: 24px;
font-weight: 500;
line-height: 89%;
background: #1e50ff1a;
padding: 16px;
width: 680px;
border-radius: 16px;
&:focus {
  border: solid 1px #1e50ff;
  -webkit-box-shadow: 0px 0px 16px 11px rgba(30, 80, 255, 0.71);
  -moz-box-shadow: 0px 0px 16px 11px rgba(30, 80, 255, 0.71);
  box-shadow: 0px 0px 16px 11px rgba(30, 80, 255, 0.71);
}
&:focus-visible {
  outline: auto 0px;
}
`

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
      <InputSearchElement
        type="text"
        placeholder="Type your keywords . . ."
        onChange={onChangeInput}
        ref={inputRef}
        value={value}
      />
    </>
  );
};

export default Search;
