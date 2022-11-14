import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import pandaLogo from "../../assets/icons/pandaLogo.svg";
import { Flex } from "../../styles/global.styled";


const LogoEl = styled.img`
  width: 45px;
  height: 45px;
`;
const LogoText = styled.p<{color?:string}>`
  font-weight: 600;
  line-height: 32px;
  margin-left: 10px;
  color: ${props => props.color || '#fff'};
  font-size: 16px;
  width: 100%;
`;
export interface ILogoProps {
  handlerScrollUp?: () => void;
  flexDirection?: string;
  color?:string;
}

const Logo: FC<ILogoProps> = ({ handlerScrollUp, flexDirection,color }) => {
  return (
    <Link to="/" onClick={handlerScrollUp}>
      <Flex alignItems="center" flexDirection={flexDirection}>
        <LogoEl src={pandaLogo} alt="logo" />
        <LogoText color={color}>NFT Store</LogoText>
      </Flex>
    </Link>
  );
};

export default Logo;
