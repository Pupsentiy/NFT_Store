import React, { FC } from "react";

import { IInputProps } from "./Input.types";

import { ErrorText, InputEl, LabelEl } from "./Input.styled";

const Input: FC<IInputProps> = (props) => {
  return (
    <LabelEl>
      {props.label}
      <InputEl
        type={props.type}
        placeholder={props.placeholder}
        {...props.register}
        onChange={props.onChange}
        value={props.value}
        //styles
        marginTop={props.marginTop}
        border={props.border}
        borderRadius={props.borderRadius}
        fontSize={props.fontSize}
        background={props.background}
        padding={props.padding}
        width={props.width}
        color={props.color}
        boxShadow={props.boxShadow}
      />
      <ErrorText>{props.error}</ErrorText>
    </LabelEl>
  );
};

export default Input;
