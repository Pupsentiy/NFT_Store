import { ChangeHandler, RefCallBack } from "react-hook-form/dist/types/form";

export interface IInputProps {
  label?: string;
  type: string;
  error?: string | undefined;
  placeholder?: string | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  register?: {
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    ref: RefCallBack;
    disabled?: boolean | undefined;
  };
  //styles
  marginTop?: string;
  border?: string;
  borderRadius?: string;
  fontSize?: string;
  background?: string;
  padding?: string;
  width?: string;
  color?: string;
  boxShadow?: string;
}
