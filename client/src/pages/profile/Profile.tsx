import React, { useEffect } from "react";
import noFoto from "../../assets/img/noFoto.png";
import camera from "../../assets/icons/photo_camera_white_24dp.png";
import "./Profile.scss";
import Chart from "../../components/chart/Chart";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getProfile } from "../../redux/auth/getProfile/asyncActions";

const Profile: React.FC = () => {
  const { userInfo,isLoading } = useAppSelector((state) => state.getProfileInfo);
  const dispatch = useAppDispatch();
 
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
              <img src={!userInfo?.avatar ? noFoto : userInfo?.avatar}  alt="avatar" className="avatar" />
              <h1>{userInfo ? userInfo?.firstName : null}</h1>
            </div>
          </div>
          <div className="profile__block-chart">{/* <Chart/> */}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
