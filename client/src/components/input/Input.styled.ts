import styled from "styled-components";

export const InputEl = styled.input<{
  marginTop?: string;
  border?: string;
  borderRadius?: string;
  fontSize?: string;
  background?: string;
  padding?: string;
  width?: string;
  color?: string;
  boxShadow?: string;
}>`
  width:${(props) => props.width || "auto"};
  border-radius: ${(props) => props.borderRadius || "0"};
  border: ${(props) => props.border || "none"};
  font-size:${(props) => props.fontSize || "normal"};
  font-weight:500;
  background:${(props) => props.background || "#fff"};
  color:${(props) => props.color || "#000"};
  outline: none;
  padding: ${(props) => props.padding || "3px 7px"};
  line-height: normal;
  margin-top: ${(props) => props.marginTop || "0"};
  &:focus {
    border: ${(props) => props.border || "none"};
    box-shadow: ${(props) => props.boxShadow || "none"};
    -webkit-box-shadow: ${(props) => props.boxShadow || "none"};
    -moz-box-shadow: ${(props) => props.boxShadow || "none"};
  }
  &:focus-visible {
    outline: auto 0px;
  }
`;

export const LabelEl = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  text-align: start;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const ErrorText = styled.p`
  margin-top: 5px;
  font-size: 10px;
  color: #FE5050;
`;
