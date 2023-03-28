import React from "react";

import { Cards } from "../../redux/cards/types";

import noAvatar from "../../assets/img/noAvatar.jpg";
import {
  Flex,
  H6,
  Img,
  PDiscriptionEl,
  WrapperImg,
} from "../../assets/styles/global.styled";
import {
  BlockCardName,
  CardContainer,
  PriceEl,
  WrapperAvatar,
  WrapperCat,
} from "./CardsComponents.styled";

type CardsProps = {
  cards: Cards[];
};

const CardsComponents: React.FC<CardsProps> = ({ cards }) => {

  const editBrokenAvatars: Cards[] = cards.map((img) =>
  img.avatar.includes("default-avatar") ? { ...img, avatar: noAvatar } : img
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
                <Flex flexDirection="column">
                  <WrapperCat>
                    <PDiscriptionEl
                      lineHeight="15px"
                      textAlign="center"
                      color="#fff"
                      fontWeight="600"
                    >
                      {item.category}
                    </PDiscriptionEl>
                  </WrapperCat>
                  <WrapperAvatar>
                    <Img src={item.avatar} alt={`avatar ${item.author}`} />
                  </WrapperAvatar>
                </Flex>
                <Flex flexDirection={"column"}>
                  <PDiscriptionEl fontWeight="600" color="#8F9CA9">
                    {item.author}
                  </PDiscriptionEl>
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
