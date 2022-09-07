import React from "react";
import "./CreateNft.scss";
import logo from "../../../assets/icons/create_nft/blockLogo.svg";

const CreateNft: React.FC  = () => {
  return (
    <section className="createNft">
      <div className="container">
        <div className="createNft__header">
          <h3 className="createNft__title">Create and sell your NFTs</h3>
        </div>
        <div className="createNft__wrapper">
          <div className="createNft__block">
            <div className="createNft__logo">
              <img src={logo} alt="logo" />
            </div>
            <h3 className="createNft__subtitle">Set up your wallet</h3>
            <p className="createNft__discription">
              Once you’ve set up your wallet of choice, connect it to OpenSea by
              clicking the wallet icon in the top right corner.
            </p>
          </div>
          <div className="createNft__block">
            <div className="createNft__logo">
              <img src={logo} alt="logo" />
            </div>
            <h3 className="createNft__subtitle">Add your NFTs</h3>
            <p className="createNft__discription">
              Once you’ve set up your wallet of choice, connect it to OpenSea by
              clicking the wallet icon in the top right corner.
            </p>
          </div>
          <div className="createNft__block">
            <div className="createNft__logo">
              <img src={logo} alt="logo" />
            </div>
            <h3 className="createNft__subtitle">List them for sale</h3>
            <p className="createNft__discription">
              Once you’ve set up your wallet of choice, connect it to OpenSea by
              clicking the wallet icon in the top right corner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateNft;
