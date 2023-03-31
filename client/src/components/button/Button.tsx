import  { FC } from "react";

import { ButtonEl } from "./Button.styled";
import { IButtonProps } from "./Button.types";

const Button: FC<IButtonProps> = (props) => {
  return (

    <ButtonEl
      onClick={props.onClick}
      active={props.active}
      type={props.type}
      //styles
      display={props.display}
      background={props.background}
      borderRadius={props.borderRadius}
      padding={props.padding}
      boxShadow={props.boxShadow}
      margin={props.margin}
      color={props.color}
      fontSize={props.fontSize}
      width={props.width}
      height={props.height}
    >
      {props.children}
    </ButtonEl>
  );
};

export default Button;
