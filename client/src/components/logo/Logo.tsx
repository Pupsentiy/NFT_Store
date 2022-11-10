import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import pandaLogo from "../../assets/icons/pandaLogo.svg";

const LinkEl = styled(Link)`
display:flex;
flex-direction:row;
align-items:center;
`
const LogoEl = styled.img`
width: 45px;
height: 45px;
`
const LogoText = styled.p`
font-weight: 600;
line-height: 32px;
margin-left: 10px;
color: #ffffff;
font-size: 16px;
width: 100%;
`
export interface ILogo{
  handlerScrollUp?:() => void;
}

const Logo: FC<ILogo> = ({handlerScrollUp}) => {

  return (
    <LinkEl to="/" onClick={handlerScrollUp}>
        <LogoEl src={pandaLogo} alt="logo" />
        <LogoText className="logo__text">NFT Store</LogoText>
    </LinkEl>
  );
};

export default Logo;
