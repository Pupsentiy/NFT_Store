import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getProfile } from "../../redux/auth/getProfile/asyncActions";
import { setLogout } from "../../redux/auth/getProfile/slice";
import { authorizationHeaders } from "../../api/fetchWrappers";

import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";
import Button from "../button/Button";

import {
  ContainerEl,
  Flex,
  HeaderEl,
  NavLinkEL,
} from "../../styles/global.styled";

const Header: React.FC = () => {
  const { isAuth } = useAppSelector((state) => state.singIn);
  const dispatch = useAppDispatch();
  const { userInfo, userToken, isLoading } = useAppSelector(
    (state) => state.getProfileInfo
  );
  useEffect(() => {
    if (userToken) {
      dispatch(getProfile());
    }
  }, []);

  const handlelogout = () => {
    dispatch(setLogout());
  };
  return (
    <HeaderEl>
      <ContainerEl>
        <Flex alignItems="center" justifyContent="space-between">
          <Logo />
          <Navigation />
          {userToken ? (
            <NavLinkEL to="/" display="none">
              <Button type="button" onClick={handlelogout}>
                Logout
              </Button>
            </NavLinkEL>
          ) : (
            <NavLinkEL to="/auth/signin" display="none">
              <Button type="button">Sign in</Button>
            </NavLinkEL>
          )}
        </Flex>
      </ContainerEl>
    </HeaderEl>
  );
};

export default Header;
