import React from "react";
import styled from "styled-components";

import { Cards } from "../../redux/cards/types";
import noAvatar from "../../assets/img/noAvatar.jpg";
import {
  ButtonEl,
  Flex,
  H6,
  Img,
  PDiscriptionEl,
  WrapperImg,
} from "../../styles/global.styled";
import axios from "axios";

type CardsProps = {
  value: Cards[];
};

export const CardContainer = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #272d37;
  z-index: 5;
  justify-content: flex-start;
  break-inside: avoid;
`;
export const BlockCardName = styled.div`
  text-align: center;
  margin-top: 24px;
  width: 325px;
  height: 100%;
`;
export const WrapperAvatar = styled.div`
  width: 45px;
  height: 45px;
  object-fit: contain;
`;

export const PriceEl = styled.div`
  font-weight: 600;
  text-align: end;
  width: 100%;
  margin-top: 10px;
`;
const CardsComponents: React.FC<CardsProps> = ({ value }) => {
  const editBrokenAvatars = value.map((e) =>
    e.avatar.includes("default-avatar") ? { ...e, avatar: noAvatar } : e
  );
 
  return (
    <>
      {editBrokenAvatars &&
        editBrokenAvatars.map((item: Cards, i: number) => (
          <CardContainer key={i}>
            <WrapperImg width={"325px"} height={"325px"}>
              <Img src={item.img} alt={item.name} />
            </WrapperImg>
            <Flex alignItems={"flex-start"} flexDirection={"column"}>
              <BlockCardName>
                <H6>{item.name}</H6>
              </BlockCardName>
              <Flex
                width={"100%"}
                justifyContent={"space-between"}
                alignItems={"flex-end"}
                marginTop={"15px"}
              >
                <WrapperAvatar>
                  <Img src={item.avatar} alt={`avatar ${item.author}`} />
                </WrapperAvatar>
                <Flex flexDirection={"column"}>
                  <PDiscriptionEl>{item.author}</PDiscriptionEl>
                  <PriceEl>{item.price.toLocaleString()} $</PriceEl>
                </Flex>
              </Flex>
            </Flex>
          </CardContainer>
        ))}
    </>
  );
};

export default CardsComponents;
function getImg(imgPath: any) {
  throw new Error("Function not implemented.");
}

