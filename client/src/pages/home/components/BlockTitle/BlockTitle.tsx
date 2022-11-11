import { Link } from "react-router-dom";
import styled from "styled-components";

import { useAppSelector } from "../../../../redux/store";
import { Cards } from "../../../../redux/cards/types";
import { Platforms, platforms } from "../../../../mockDate/mockPlatforms";
import { SceletonPicture } from "./SceletonPicture";
import {
  BackgroundImgOrnametStyle,
  ContainerEl,
  Flex,
  H2,
  Img,
  NavLinkEL,
  PDiscriptionEl,
  SectionEl,
  WrapperImg,
} from "../../../../styles/global.styled";
import linkup from "../../../../assets/icons/discover_logo/linkup.svg";

export const TitleEl = styled.title`
  display: flex;
  justify-content: space-between;
`;
export const WrapperCardsEl = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 56px;
  position: relative;
  padding: 0 30px;
`;

const BlockTitle: React.FC = () => {
  const { items, status } = useAppSelector((state) => state.card);
  const picture: Cards[] = items
    .map((e) => e)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  const sceletons = [...new Array(3)].map((_, index) => (
    <SceletonPicture key={index} />
  ));

  return (
    <SectionEl>
      <ContainerEl>
        <BackgroundImgOrnametStyle top={"374px"} right={"0"} />
        <TitleEl>
          <H2 margin={"0 20px 0 0"}> Discover a New Era of Crypto Currency</H2>
          <PDiscriptionEl display={"flex"} flexDirectin={"column"}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
            <NavLinkEL to="#" display={"none"}>
              Get Started
              <Img src={linkup} alt="img" />
            </NavLinkEL>
          </PDiscriptionEl>
        </TitleEl>
      </ContainerEl>
      <WrapperCardsEl>
        {status === "loading"
          ? sceletons
          : picture &&
            picture.map((pic: Cards, i: number) => (
              <WrapperImg key={i} width={'400px'} height={'400px'}>
                <Img src={pic.img} alt="card" />
              </WrapperImg>
            ))}
      </WrapperCardsEl>
      <SectionEl>
        <Flex justifyContent={'space-evenly'} alignItems={'center'}>
          {platforms &&
            platforms.map((platform: Platforms, i: number) => (
              <Link rel="noreferrer" target="_blank" to={platform.site} key={i}>
                <Img
                  className="blockchain__link-logo"
                  src={platform.logo}
                  alt={platform.alt}
                  borderRadius={"none"}
                  width={"200px"}
                />
              </Link>
            ))}
        </Flex>
      </SectionEl>
    </SectionEl>
  );
};

export default BlockTitle;
