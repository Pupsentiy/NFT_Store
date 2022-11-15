export interface IButtonProps {
  onClick?: (() => void) | undefined;
  label: string;
  type: string;
  
  background?: string;
  borderRadius?: string;
  padding?: string;
  boxShadow?: string;
  marginTop?: string;
  color?: string;
  fontSize?: string;
}