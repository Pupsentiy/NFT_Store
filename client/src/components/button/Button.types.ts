export interface IButtonProps {
  onClick?: ((e:React.MouseEvent<HTMLButtonElement>) => void) | undefined;
  label: string;
  type: string;
  
  active?:boolean;
  background?: string;
  borderRadius?: string;
  padding?: string;
  boxShadow?: string;
  marginTop?: string;
  color?: string;
  fontSize?: string;
  width?:string;
  height?:string;
}