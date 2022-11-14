import React from "react";
import styled from "styled-components";

export const InputEl = styled.input`
  border-radius: 5px;
  border: 1px solid #adb9c7;
  outline: none;
  height: 25px;
  padding: 3px 7px;
  line-height: normal;
  margin-top: 3px;
  &:focus {
    border: 1px solid #1e50ff;
    box-shadow: 0 0 3px 2px #1f50ffd2;
  }
`;

const Input = ({label,register,name}:any) => {
  console.log(register)
  return <input {...register(name)}/>;
};

export default Input;
