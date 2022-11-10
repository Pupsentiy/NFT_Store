import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getProfile } from "../../redux/auth/getProfile/asyncActions";
import { setLogout } from "../../redux/auth/getProfile/slice";
import { authorizationHeaders } from "../../api/fetchWrappers";

import { ButtonEl, ContainerEl, NavLinkEL } from "../../styles/global.styled";
import Logo from "../logo/Logo";
import NavBar from "../navbar/NavBar";

export const HeaderEl = styled.header`
  padding-top: 40px;
`;

export const WrapperHeaderEl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header: React.FC = () => {
  const { isAuth } = useAppSelector((state) => state.singIn);
  const dispatch = useAppDispatch();
  const { userInfo, isLoading } = useAppSelector(
    (state) => state.getProfileInfo
  );

  const userToken = authorizationHeaders.Authorization;
  useEffect(() => {
    dispatch(getProfile());
  }, []);

  const handlelogout = () => {
    dispatch(setLogout());
  };
  return (
    <HeaderEl>
      <ContainerEl>
        <WrapperHeaderEl>
          <Logo />
          <NavBar />
          {userInfo ? (
            <NavLinkEL to="/">
              <ButtonEl onClick={handlelogout}>Logout</ButtonEl>
            </NavLinkEL>
          ) : (
            <NavLinkEL to="/auth/signin">
              <ButtonEl>Sign in</ButtonEl>
            </NavLinkEL>
          )}
        </WrapperHeaderEl>
      </ContainerEl>
    </HeaderEl>
  );
};

export default Header;
