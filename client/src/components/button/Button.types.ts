import { ReactNode } from "react";

export interface IButtonProps {
  onClick?: ((e:React.MouseEvent<HTMLButtonElement>) => void) | undefined;
  children:ReactNode;
  type: 'submit' | 'reset' | 'button' | undefined;
  active?:boolean;
  //
  display?:string;
  background?: string;
  borderRadius?: string;
  padding?: string;
  boxShadow?: string;
  margin?: string;
  color?: string;
  fontSize?: string;
  width?:string;
  height?:string;
}