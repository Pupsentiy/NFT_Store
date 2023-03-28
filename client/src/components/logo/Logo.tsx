import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import pandaLogo from "../../assets/icons/pandaLogo.svg";
import { Flex, LogoEl, PDiscriptionEl } from "../../assets/styles/global.styled";
import { ILogoProps } from "./Logo.types";

const Logo: FC<ILogoProps> = ({ handlerScrollUp, flexDirection,color,justifyContent}) => {
  return (
    <Link to="/" onClick={handlerScrollUp}>
      <Flex alignItems="center" flexDirection={flexDirection} justifyContent={justifyContent}>
        <LogoEl src={pandaLogo} alt="logo" />
        <PDiscriptionEl color={color} marginLeft='10px' fontSize="16px" fontWeight="600">NFT Store</PDiscriptionEl>
      </Flex>
    </Link>
  );
};

export default Logo;
