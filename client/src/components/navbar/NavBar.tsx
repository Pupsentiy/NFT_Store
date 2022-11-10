import React, { FC } from "react";
import styled from "styled-components";

import { NavLinkEL } from "../../styles/global.styled";

export const NavbarEl = styled.ul`
  display: flex;
`;
export const NavBarItemEl = styled.li`
  margin:0 16px;
`;

export const ContainerNavBarEl = styled.nav`
  margin: 0 15px;
`;
interface IArrLinks {
  to: string;
  title: string;
}

const NavBar: FC = () => {
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
            <NavBarItemEl className="menu__item" key={index}>
              <NavLinkEL to={link.to} className="item-link">
                {link.title}
              </NavLinkEL>
            </NavBarItemEl>
          ))}
      </NavbarEl>
    </ContainerNavBarEl>
  );
};

export default NavBar;
