import { useEffect } from "react";
import { FiLogOut } from "react-icons/fi";

import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getProfile } from "../../redux/auth/getProfile/asyncActions";
import { setLogout } from "../../redux/auth/getProfile/slice";

import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";
import Button from "../button/Button";

import {
  ContainerEl,
  Flex,
  H5,
  HeaderEl,
  Img,
  NavLinkEL,
  PDiscriptionEl,
  WrapperImg,
} from "../../styles/global.styled";
import { routesConfig } from "../../routes/routesConfig";
import styled from "styled-components";
import { WrapperAvatar } from "../../pages/profilePage/Profile";
import avatarDefault from "../../assets/img/noFoto.png";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.singIn);
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
            <Flex alignItems="center">
              <NavLinkEL to={routesConfig.profile.path} alignItems='center' activeNone="none">
              <WrapperImg width="50px" height="50px">
                <Img
                  src={!userInfo?.avatar ? avatarDefault : userInfo?.avatar}
                  alt="user foto"
                />
              </WrapperImg>
              <PDiscriptionEl fontSize="14px" fontWeight="600" marginLeft="10px">
                {userInfo?.firstName}
              </PDiscriptionEl>
              </NavLinkEL>
              <NavLinkEL
                to={routesConfig.home.path}
                onClick={handlelogout}
                marginleft="10px"
                activeNone="none"
                fontSize="25px"
                color="#fff"
              >
                <FiLogOut />
              </NavLinkEL>
            </Flex>
          ) : (
            <NavLinkEL to="/auth/signin" >
              <Button type="button">Sign in</Button>
            </NavLinkEL>
          )}
        </Flex>
      </ContainerEl>
    </HeaderEl>
  );
};

export default Header;
