import React, { FC } from "react";

import { IArrLinks } from "./Navigation.types";

import {
  ContainerNavBarEl,
  NavbarEl,
  NavBarItemEl,
  NavLinkEL,
} from "../../styles/global.styled";

const Navigation: FC = () => {
  const arrLinks: IArrLinks[] = [
    { to: "/", title: "Home" },
    { to: "/discover", title: "Discover" },
    { to: "/docs", title: "Docs" },
    { to: "/blog", title: "Blog" },
    { to: "/profile", title: "Contact Us/Prof" },
  ];
  return (
    <ContainerNavBarEl>
      <NavbarEl>
        {arrLinks &&
          arrLinks.map((link: IArrLinks, index: number) => (
            <NavBarItemEl key={index}>
              <NavLinkEL to={link.to}>{link.title}</NavLinkEL>
            </NavBarItemEl>
          ))}
      </NavbarEl>
    </ContainerNavBarEl>
  );
};

export default Navigation;
