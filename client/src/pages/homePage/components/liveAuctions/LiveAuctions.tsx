import {FC} from "react";

import CardsComponents from "../../../../components/cards/CardsComponents";
import { SceletonCards } from "../../../../components/cards/SceletonCards";
import Button from "../../../../components/button/Button";

import { routesConfig } from "../../../../routes/routesConfig";
import {useAppSelector} from "../../../../hooks/hooks";

import {Cards} from "../../../../redux/cards/types";

import {
  BackgroundImgOrnametStyle,
  ContainerEl,
  Flex,
  H3,
  NavLinkEL,
  SectionEl,
} from "../../../../assets/styles/global.styled";


const LiveAuctions: FC = () => {
  const { items, status } = useAppSelector((state) => state.cards);

  const cards: Cards[] = items
      .map((e) => e)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

  const sceletonCards = [...new Array(3)].map((_, index) => (
    <SceletonCards key={index} />
  ));

  return (
    <SectionEl>
      <BackgroundImgOrnametStyle top={"49%"} left={"-24%"} />
      <ContainerEl>
        <Flex justifyContent={"space-between"} alignItems="center">
          <H3>Live Auctions</H3>
          <NavLinkEL to={routesConfig.discover.path}>
            <Button type="button">Get Started</Button>
          </NavLinkEL>
        </Flex>
        <Flex marginTop="56px" justifyContent="space-between">
          {status === "loading" ? (
            sceletonCards
          ) : (
            <CardsComponents cards={cards} />
          )}
        </Flex>
      </ContainerEl>
    </SectionEl>
  );
};

export default LiveAuctions;
