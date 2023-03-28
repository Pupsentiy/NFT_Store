import React, { useCallback, useRef, useState } from "react";
import debounce from "lodash.debounce";

import { setCurrentPage, setSearchValue } from "../../redux/filter/filterSlice";
import Input from "../input/Input";
import {useAppDispatch} from "../../hooks/hooks";

const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("");

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
    dispatch(setCurrentPage(1));
  };

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 250),
    []
  );

  return (
    <>
      <Input
        type="search"
        placeholder="Type your keywords . . ."
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onChangeInput(event)
        }
        value={value}
        //styles
        marginTop="40px"
        border="solid 1px #1e50ff"
        borderRadius="8px"
        fontSize="24px"
        background="#1e50ff1a"
        padding="16px"
        width="680px"
        color="#fff"
        boxShadow="0px 0px 16px 11px rgba(30, 80, 255, 0.71)"
      />
    </>
  );
};

export default Search;
