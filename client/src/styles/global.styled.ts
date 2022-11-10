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

export const H2 = styled.h2<{margin?:string}>`
  font-size: 64px;
  font-weight: 700;
  line-height: 100%;
  margin: ${(props) => props.margin || '0'};
`;

export const H3 = styled.h3`
  font-weight: 700;
  font-size: 48px;
  line-height: 89%;
  margin: 0px;
`;
export const H5 = styled.h5`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  margin: 0px;
  margin-bottom: 24px;
`;

export const H6 = styled.h6`
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  margin: 0px;
`;
export const PTextEl = styled.p<{display?:string;flexDirectin?:string}>`
  color: #adb9c7;
  font-size: 14px;
  line-height: 32px;
  font-weight: 400;
  display:${props => props.display || '0'};
  flex-direction:${props => props.flexDirectin || '0'};
`;

export const NavLinkEL = styled(NavLink)<{display?:string}>`
  font-size: 16px;
  font-weight: 600;
  line-height: 133%;
  text-decoration: none;
  color: #8f9ca9;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  position: relative;
  &:hover {
    color: #ffffff;
  }
  &.active {
    color: #ffffff;
    &::before {
      display:${props => props.display || 'block'};
      top: 20px;
      left: 0;
      position: absolute;
      width: 65%;
      border-bottom: 2px solid #1e50ff;
      content: "";
    }
  }
`;

export const BackgroundImgOrnametStyle = styled.div<{top?:string; right?:string;}>`
top:${props => props.top || '0'};
right:${props => props.right || '0'};
width: 638px;
height: 587px;
border-radius: 50%;
background: rgba(30, 80, 255, 0.5);
filter: blur(300px);
position:absolute;
z-index:-1;
`

export const ContainerEl = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100%;
  padding: 0 30px;
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
position:relative;
margin-top:120px;
`
