import React from "react";
import { Cards } from "../../redux/cards/types";
import "./CardsComponents.scss";
type CardsProps = {
  value: Cards[];
};

const CardsComponents: React.FC<CardsProps> = ({ value }) => {
  return (
    <>
      {value &&
        value.map((item: Cards, i: number) => (
          <div className="CardsComponents__card" key={i}>
            <div className="CardsComponents__img-wrapper">
              <img
                src={item.img}
                alt="avatar"
                className="CardsComponents__avatar"
              />
              <div className="CardsComponents__backround-btn-like">
                {/* <img src="" alt="like" /> */}
              </div>
            </div>
            <div className="CardsComponents__wrapper">
              <div className="CardsComponents__block-name">
                <h6 className="CardsComponents__card-name">{item.name}</h6>
              </div>
              <div className="CardsComponents__block-info">
                <div className="CardsComponents__wrapper-info">
                <div className="liveAuctons__owner-wrapper-img">
                  <img
                    src={item.avatar}
                    alt="avatar"
                    className="CardsComponents__owner-foto"
                  />
                </div>
              <p >{item.author}</p>
                </div>
                <div className="CardsComponents__wrapper-price">
                  <span >
                    {item.price.toLocaleString()} ₽
                  </span>
                </div>
              </div>
                <button className="CardsComponents__btn-buy">Buy</button>
            </div>
          </div>
        ))}
    </>
  );
};

export default CardsComponents;
