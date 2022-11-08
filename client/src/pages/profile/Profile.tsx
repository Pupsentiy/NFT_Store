import React, { useEffect } from "react";
import noFoto from "../../assets/img/noFoto.png";
import camera from "../../assets/icons/photo_camera_white_24dp.png";
import "./Profile.scss";
import Cahrt from "../../components/chart/Cahrt";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getProfile } from "../../redux/auth/getProfile/asyncActions";

const Profile: React.FC = () => {
  const { userInfo } = useAppSelector((state) => state.getProfileInfo);
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //
  //     dispatch(getProfile())
  //
  // }, [userToken, dispatch])
  console.log(userInfo,'12')
  return (
    <div className="profile">
      <div className="container">
        <div className="profile__info_full">
          <div className="profile__block-avatar">
            <label htmlFor="img" className="profile__label-img">
              <img src={camera} alt="loadButton" />
            </label>
            <input type="file" id="img" accept="image/*" />
            <div className="wrapper-avatar">
              <img src={noFoto} alt="avatar" className="avatar" />
              <h1>Name</h1>
            </div>
          </div>
          <div className="profile__block-chart">{/* <Cahrt/> */}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
