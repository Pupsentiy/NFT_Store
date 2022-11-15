import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getProfile } from "../../redux/auth/getProfile/asyncActions";
import { setLogout } from "../../redux/auth/getProfile/slice";
import { authorizationHeaders } from "../../api/fetchWrappers";

import { ContainerEl, Flex, HeaderEl, NavLinkEL } from "../../styles/global.styled";
import Logo from "../logo/Logo";
import NavBar from "../navbar/NavBar";
import Button from "../button/Button";

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
        <Flex alignItems="center" justifyContent="space-between">
          <Logo />
          <NavBar />
          {userInfo ? (
            <NavLinkEL to="/">
              <Button type='button' label="Logout" onClick={handlelogout} />
            </NavLinkEL>
          ) : (
            <NavLinkEL to="/auth/signin">
              <Button type='button' label="Sign in" />
            </NavLinkEL>
          )}
        </Flex>
      </ContainerEl>
    </HeaderEl>
  );
};

export default Header;
