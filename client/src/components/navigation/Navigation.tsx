import React, { FC } from "react";

import { NavBarRoutes } from "../../routes/routesConfig";

import {
  ContainerNavBarEl,
  NavbarEl,
  NavBarItemEl,
  NavLinkEL,
} from "../../assets/styles/global.styled";

const Navigation: FC = () => {
  return (
    <ContainerNavBarEl>
      <NavbarEl>
        {NavBarRoutes &&
          Object.values(NavBarRoutes).map(({ path, title }, index) => (
            <NavBarItemEl key={index}>
              <NavLinkEL to={path}>{title}</NavLinkEL>
            </NavBarItemEl>
          ))}
      </NavbarEl>
    </ContainerNavBarEl>
  );
};

export default Navigation;
