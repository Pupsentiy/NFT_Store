import { NavLink } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

export function fontFace(
  name: string,
  src: string,
  fontWeight: number,
  fontStyle: string = "normal"
) {
  return `
    @font-face{
        font-family: "${name}";
             url(${require("../assets/fonts/" +
               src +
               ".ttf")}) format("truetype"),
        font-style: ${fontStyle};
        font-weight: ${fontWeight};
    }
`;
}

export const GlobalStyle = createGlobalStyle`
${fontFace("Poppins", "Poppins-Regular", 400, "normal")}
${fontFace("Poppins", "Poppins-Medium", 500, "normal")}
${fontFace("Poppins", "Poppins-Bold", 600, "normal")}
${fontFace("Poppins", "Poppins-SemiBold", 700, "normal")}

*{
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
body{
  font-size: 16px;
  background-color: #02050E;
  box-sizing: border-box;
  color: #FFFFFF;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0;
  position: relative;
}

html{
  height: 100%;
  margin: 0;
  padding: 0;
}
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul[class],
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd,
a {
    margin: 0;
    padding: 0;
list-style-type: none;
text-decoration: none;
}
textarea:focus, input:focus{
  outline: none;
}
`;

export const H2 = styled.h2<{ margin?: string }>`
  font-size: 64px;
  font-weight: 700;
  line-height: 100%;
  margin: ${(props) => props.margin || "0"};
`;

export const H3 = styled.h3<{ textAlign?: string; marginTop?: string }>`
  font-weight: 700;
  font-size: 48px;
  line-height: 89%;
  text-align: ${(props) => props.textAlign || "left"};
  margin-top: ${(props) => props.marginTop || "0"};
`;
export const H5 = styled.h5<{ marginTop?: string }>`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  margin-top: ${(props) => props.marginTop || "0"};
`;

export const H6 = styled.h6`
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
`;
export const PDiscriptionEl = styled.p<{
  display?: string;
  flexDirectin?: string;
  textAlign?: string;
  marginTop?: string;
  color?: string;
}>`
  color: ${(props) => props.color || "#fff"};
  font-size: 14px;
  line-height: 32px;
  font-weight: 400;
  text-align: ${(props) => props.textAlign || "left"};
  display: ${(props) => props.display || "block"};
  flex-direction: ${(props) => props.flexDirectin || "0"};
  margin-top: ${(props) => props.marginTop || "0"};
`;

export const NavLinkEL = styled(NavLink)<{
  display?: string;
  textDecoration?: string;
  color?: string;
  marginleft?:string;
}>`
  font-size: 16px;
  font-weight: 600;
  line-height: 133%;
  margin-left:${props => props.marginleft || '0'};
  text-decoration: ${(props) => props.textDecoration || "none"};
  color: ${props => props.color || '#8f9ca9'};
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  position: relative;
  &:hover {
    color: ${props => props.color || '#fff'};
  }
  &.active {
    color: #ffffff;
    &::before {
      display: ${(props) => props.display || "block"};
      top: 20px;
      left: 0;
      position: absolute;
      width: 65%;
      border-bottom: 2px solid #1e50ff;
      content: "";
    }
  }
`;

export const BackgroundImgOrnametStyle = styled.div<{
  top?: string;
  right?: string;
  left?: string;
}>`
  top: ${(props) => props.top || "0"};
  right: ${(props) => props.right || "0"};
  left: ${(props) => props.left || "auto"};
  width: 638px;
  height: 587px;
  border-radius: 50%;
  background: rgba(30, 80, 255, 0.5);
  filter: blur(300px);
  position: absolute;
  z-index: -1;
`;

export const ContainerEl = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100%;
  padding: 0 30px;
`;

export const ContainerAuthEl = styled.div`
  position: fixed;
  height: 100vh;
  z-index: 1000;
  width: 100%;
  background-color: #fff;
  top: 0;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
  padding-top: 30px;
`;

export const ButtonEl = styled.button`
  border-radius: 8px;
  border: solid 1px #1e50ff;
  padding: 16px 60.5px;
  font-weight: 600;
  color: #ffffff;
  font-size: 16px;
  line-height: 133%;
  cursor: pointer;
  background: transparent;
  &:active {
    font-size: 16px;
    color: #ffffff;
    font-weight: 600;
    line-height: 133%;
    background: #1e50ff;
    border-radius: 8px;
    -webkit-box-shadow: 0px 0px 16px 4px rgba(30, 80, 255, 0.71);
    -moz-box-shadow: 0px 0px 16px 4px rgba(30, 80, 255, 0.71);
    box-shadow: 0px 0px 16px 4px rgba(30, 80, 255, 0.71);
  }
`;

export const SectionEl = styled.section`
  position: relative;
  margin-top: 120px;
`;

export const Flex = styled.div<{
  alignItems?: string;
  justifyContent?: string;
  marginTop?: string;
  flexDirection?: string;
  width?: string;
}>`
  width: ${(props) => props.width || "auto"};
  display: flex;
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "left"};
  margin-top: ${(props) => props.marginTop || "0"};
  flex-direction: ${(props) => props.flexDirection || "row"};
`;

export const WrapperImg = styled.picture<{ width?: string; height?: string }>`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
`;

export const Img = styled.img<{ borderRadius?: string; width?: string }>`
  border-radius: ${(props) => props.borderRadius || "8px"};
  width: ${(props) => props.width || "auto"};
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;
