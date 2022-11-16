import React, { FC } from "react";
import { useAppSelector } from "../../redux/store";

import { ButtonEl } from "./Button.styled";
import { IButtonProps } from "./Button.types";

const Button: FC<IButtonProps> = (props) => {
  return (
    <ButtonEl
      onClick={props.onClick}
      active={props.active}
      //styles
      background={props.background}
      borderRadius={props.borderRadius}
      padding={props.padding}
      boxShadow={props.boxShadow}
      marginTop={props.marginTop}
      color={props.color}
      fontSize={props.fontSize}
      width={props.width}
      height={props.height}
    >
      {props.label}
    </ButtonEl>
  );
};

export default Button;
