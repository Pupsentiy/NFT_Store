import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Logo from "../logo/Logo";

import git from "../../assets/icons/github-1.svg";
import inst from "../../assets/icons/instagram.svg";
import {
  ContainerEl,
  Flex,
  H5,
  PDiscriptionEl,
} from "../../styles/global.styled";


export const FooterEl = styled.footer`
  margin-top: 60px;
  padding-top: 88px;
  padding-bottom: 50px;
`;
export const WrapperAboutUs = styled.div`
  margin-right: 88px;
  width: 40%;
`;

export const BlockSoical = styled.div`
  margin-top: 24px;
  img {
    margin-right: 16px;
  }
`;
export interface IArrSocial {
  link: string;
  img: string;
  alt: string;
}

const Footer: React.FC = () => {
  const handlerScrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const arrSocial: IArrSocial[] = [
    { link: "https://github.com/Pupsentiy", img: git, alt: "link git" },
    {
      link: "https://www.instagram.com/pupsentiy/",
      img: inst,
      alt: "link inst",
    },
  ];

  return (
    <FooterEl>
      <ContainerEl>
        <Flex justifyContent={"space-between"}>
          <WrapperAboutUs>
            <Logo handlerScrollUp={handlerScrollUp} />
            <PDiscriptionEl marginTop={"24px"}>
              The world's first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items.
            </PDiscriptionEl>
          </WrapperAboutUs>
          <div>
            <H5>Contact</H5>
            <PDiscriptionEl>
              2715 Ash Dr. San Jose, South Dakota 83475
            </PDiscriptionEl>
            <BlockSoical>
              {arrSocial &&
                arrSocial.map((social: IArrSocial, index: number) => (
                  <Link key={index} to={social.link}>
                    <img src={social.img} alt={social.alt} />
                  </Link>
                ))}
            </BlockSoical>
          </div>
        </Flex>
        <PDiscriptionEl marginTop={"24px"}>
          2022 All Right Reserved
        </PDiscriptionEl>
      </ContainerEl>
    </FooterEl>
  );
};

export default Footer;
