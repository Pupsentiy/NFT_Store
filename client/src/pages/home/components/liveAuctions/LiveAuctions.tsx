import { useAppSelector } from "../../../../redux/store";
import { Cards } from "../../../../redux/cards/types";

import CardsComponents from "../../../../components/cards/CardsComponents";
import { SceletonCards } from "../../../../components/cards/SceletonCards";

import {
  BackgroundImgOrnametStyle,
  ButtonEl,
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
        <Flex justifyContent={"space-between"}>
          <H3>Live Auctions</H3>
          <ButtonEl>
            <NavLinkEL to="/discover">Get Started</NavLinkEL>
          </ButtonEl>
        </Flex>
        <Flex marginTop={"56px"}>
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
