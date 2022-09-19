import React from "react";
import avatar from "../../assets/img/test.gif";
import camera from "../../assets/icons/photo_camera_white_24dp.png";
import "./Profile.scss";

const Profile = () => {
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
            <img src={avatar} alt="avatar" className="avatar" />
            <h1>Name</h1>
            </div>
            </div>
          <div className="profile__block-info">
           
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              libero quam deleniti iusto doloremque placeat, beatae atque minus,
              voluptates, ea facilis ullam nulla animi illum nam odio optio
              provident porro? Repellendus eos pariatur, unde porro laudantium,
              ad id debitis magni cumque qui dolore voluptatibus, ut atque
              doloribus perferendis similique possimus accusantium. Dignissimos
              nemo tempora officia qu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
