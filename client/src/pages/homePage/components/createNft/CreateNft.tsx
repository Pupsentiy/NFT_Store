import React from "react";
import styled from "styled-components";

import logo from "../../../../assets/icons/create_nft/blockLogo.svg";
import {
  ContainerEl,
  Flex,
  H3,
  H5,
  PDiscriptionEl,
  SectionEl,
} from "../../../../styles/global.styled";

export const WrapperButton = styled.div`
  border: solid 1px #272d37;
  background: #272d37;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 30px;
  justify-content: center;
  margin-right: 28px;
  &:first-child {
    border-radius: 16px 0px 0px 16px;
  }
  &:last-child {
    margin-right: 0px;
    border-radius: 0px 16px 16px 0px;
  }
  &:hover {
    background: transparent;
    cursor: pointer;
    border: 1px solid;
    border-image-source: linear-gradient(
        136.6deg,
        #ffffff -14.02%,
        rgba(255, 255, 255, 0) 51.46%
      ),
      linear-gradient(317.85deg, #ffffff 0%, rgba(255, 255, 255, 0) 66.33%);
  }
`;
export interface IArrItem {
  logo: string;
  title: string;
  text: string;
}
const CreateNft: React.FC = () => {
  const arrItem: IArrItem[] = [
    {
      logo: logo,
      title: "Set up your wallet",
      text: "Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.",
    },
    {
      logo: logo,
      title: "Add your NFTs",
      text: "Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.",
    },
    {
      logo: logo,
      title: "List them for sale",
      text: "Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.",
    },
  ];

  return (
    <SectionEl>
      <ContainerEl>
        <H3 textAlign={"center"}>Create and sell your NFTs</H3>
        <Flex marginTop={"56px"}>
          {arrItem &&
            arrItem.map((item: IArrItem, index: number) => (
              <WrapperButton key={index}>
                <img src={item.logo} alt="logo" />
                <H5 marginTop={"48px"}>{item.title}</H5>
                <PDiscriptionEl textAlign={"center"} marginTop={"24px"}>
                  {item.text}
                </PDiscriptionEl>
              </WrapperButton>
            ))}
        </Flex>
      </ContainerEl>
    </SectionEl>
  );
};

export default CreateNft;
