import { useAppSelector } from "../../../../redux/store";
import { Cards } from "../../../../redux/cards/types";

import CardsComponents from "../../../../components/cards/CardsComponents";
import { SceletonCards } from "../../../../components/cards/SceletonCards";
import Button from "../../../../components/button/Button";

import {
  BackgroundImgOrnametStyle,
  ContainerEl,
  Flex,
  H3,
  NavLinkEL,
  SectionEl,
} from "../../../../styles/global.styled";

const LiveAuctions: React.FC = () => {
  const { items, status } = useAppSelector((state) => state.card);
  const card: Cards[] = items
    .map((e) => e)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  const sceletonsCards = [...new Array(3)].map((_, index) => (
    <SceletonCards key={index} />
  ));

  return (
    <SectionEl>
      <BackgroundImgOrnametStyle top={"49%"} left={"-24%"} />
      <ContainerEl>
        <Flex justifyContent={"space-between"} alignItems='center'>
          <H3>Live Auctions</H3>
          <NavLinkEL to="/discover">
          <Button type="button" >Get Started</Button>
          </NavLinkEL>
        </Flex>
        <Flex marginTop="56px" justifyContent='space-between'>
          {status === "loading" ? (
            sceletonsCards
          ) : (
            <CardsComponents value={card} />
          )}
        </Flex>
      </ContainerEl>
    </SectionEl>
  );
};

export default LiveAuctions;
