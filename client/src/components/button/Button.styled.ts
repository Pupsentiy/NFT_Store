import styled, { css } from "styled-components";

export const ButtonEl = styled.button<{
  borderRadius?: string;
  background?: string;
  padding?: string;
  boxShadow?: string;
  marginTop?: string;
  color?: string;
  fontSize?: string;
  width?:string;
  height?:string;
  active?:boolean;
}>`
  width:${props => props.width || 'auto'};
  height:${props => props.height || 'auto'};
  margin-top: ${(props) => props.marginTop || "0"};
  border-radius: ${(props) => props.borderRadius || "8px"};
  border: solid 1px #1e50ff;
  padding: ${(props) => props.padding || "16px 60.5px"};
  font-weight: 600;
  color: ${(props) => props.color || "#fff"};
  font-size: ${(props) => props.fontSize || "16px"};
  line-height: 133%;
  cursor: pointer;
  background: ${(props) => props.background || "transparent"};
  -webkit-transition: all 0.10s ease;
  transition: all 0.10s ease;
  &:active {
    font-size: ${(props) => props.fontSize || "16px"};
    color: #fff;
    font-weight: 600;
    line-height: 133%;
    background: #1e50ff;
    border-radius: ${(props) => props.borderRadius || "8px"};
    -webkit-box-shadow: ${(props) =>
      props.boxShadow || "0px 0px 16px 4px rgba(30, 80, 255, 0.71)"};
    -moz-box-shadow: ${(props) =>
      props.boxShadow || "0px 0px 16px 4px rgba(30, 80, 255, 0.71)"};
    box-shadow: ${(props) =>
      props.boxShadow || "0px 0px 16px 4px rgba(30, 80, 255, 0.71)"};
  }

  ${props => props.active && css`
    background: #1e50ff;
  `}
`;
