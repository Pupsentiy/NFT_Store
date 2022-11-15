import React from "react";

import { Cards } from "../../redux/cards/types";

import noAvatar from "../../assets/img/noAvatar.jpg";
import {
  Flex,
  H6,
  Img,
  PDiscriptionEl,
  WrapperImg,
} from "../../styles/global.styled";
import {
  BlockCardName,
  CardContainer,
  PriceEl,
  WrapperAvatar,
} from "./CardsComponents.styled";

type CardsProps = {
  value: Cards[];
};

const CardsComponents: React.FC<CardsProps> = ({ value }) => {
  const editBrokenAvatars: Cards[] = value.map((e) =>
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
