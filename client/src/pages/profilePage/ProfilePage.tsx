import React from "react";
import styled from "styled-components";

import {useAppDispatch, useAppSelector} from "../../hooks/hooks";

import { ContainerEl, Flex, H3, Img } from "../../assets/styles/global.styled";

import avatarDefault from "../../assets/img/noFoto.png";
import camera from "../../assets/icons/photo_camera_white_24dp.png";

export const BlockAvatar = styled.div`
  margin-right:50px;
  width:250px;
  height:250px;
  input {
    display: none;
  }
`;
export const ButtonLoadImg = styled.label`
  transition: opacity 0.2s ease-in-out;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 5px 0;
  background-color: rgba(32, 33, 36, 0.6);
  display: flex;
  justify-content: center;

  img {
    height: 100%;
    opacity: 0.8;
    width: 24px;
  }
`;
export const WrapperAvatar = styled.picture`
  position: relative;
`;

const ProfilePage = () => {
  const { userInfo, isLoading } = useAppSelector(
    (state) => state.getProfileInfo
  );
  const dispatch = useAppDispatch();
    console.log(userInfo)
  return (
    <ContainerEl>
      <Flex marginTop='50px'>
        <BlockAvatar>
          <WrapperAvatar>
            <Img
              src={!userInfo?.avatar ? avatarDefault : userInfo?.avatar}
              alt="avatar"
            />
            <ButtonLoadImg htmlFor="img">
              <img src={camera} alt="loadButton" />
            </ButtonLoadImg>
            <input type="file" id="img" accept="image/*" />
          </WrapperAvatar>
          <H3 textAlign="center" marginTop="10px">
            {userInfo ? userInfo?.firstName : null}
          </H3>
        </BlockAvatar>
        {/* <div className="profile__block-chart"><Chart/></div> */}
      </Flex>
    </ContainerEl>
  );
};

export default ProfilePage;
