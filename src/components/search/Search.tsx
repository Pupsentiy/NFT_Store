import React, { useRef, useState } from "react";
import "./Search.scss";

const Search: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

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
