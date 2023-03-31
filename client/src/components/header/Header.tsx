import {FC, useEffect} from "react";
import { FiLogOut } from "react-icons/fi";

import { getProfile } from "../../redux/auth/getProfile/asyncActions";
import { setLogout } from "../../redux/auth/getProfile/slice";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";

import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";
import Button from "../button/Button";

import {
  ContainerEl,
  Flex,
  HeaderEl,
  Img,
  NavLinkEL,
  PDiscriptionEl,
  WrapperImg,
} from "../../assets/styles/global.styled";
import { routesConfig } from "../../routes/routesConfig";
import avatarDefault from "../../assets/img/noFoto.png";

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.singIn);
  const { userInfo, userToken, isLoading } = useAppSelector(
    (state) => state.getProfileInfo
  );

  useEffect(() => {
    if (userToken) {
      dispatch(getProfile());
    }
  }, [dispatch, userToken]);

  const handlelogout = () => {
    dispatch(setLogout());
  };
console.log(userToken)
  return (
    <HeaderEl>
      <ContainerEl>
        <Flex alignItems="center" justifyContent="space-between">
          <Logo />
          <Navigation />
          {userToken !== null ? (
            <Flex alignItems="center">
              <NavLinkEL to={routesConfig.profile.path} beforedisplay='none' alignitems="center" flexdirection="column" >
              <WrapperImg width="50px" height="50px">
                <Img
                  src={!userInfo?.avatar ? avatarDefault : userInfo?.avatar}
                  alt="user foto"
                />
              </WrapperImg>
              <PDiscriptionEl fontSize="14px" fontWeight="600"  lineHeight="normal">
                {userInfo?.firstName}
              </PDiscriptionEl>
              </NavLinkEL>
              <NavLinkEL
                to={routesConfig.home.path}
                onClick={handlelogout}
                marginleft="30px"
                fontSize="25px"
                color="#fff"
                beforedisplay='none'
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
