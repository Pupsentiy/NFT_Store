import React, { FC } from "react";

import { ButtonEl } from "./Button.styled";
import { IButtonProps } from "./Button.types";

const Button: FC<IButtonProps> = (props) => {
  return (
    <ButtonEl
      onClick={props.onClick}
      background={props.background}
      borderRadius={props.borderRadius}
      padding={props.padding}
      boxShadow={props.boxShadow}
      marginTop={props.marginTop}
      color={props.color}
      fontSize={props.fontSize}
    >
      {props.label}
    </ButtonEl>
  );
};

export default Button;
