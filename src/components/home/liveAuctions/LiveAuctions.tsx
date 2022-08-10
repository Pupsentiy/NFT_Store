import "./LiveAuctions.scss";
import { useAppSelector } from "../../../redux/store";
import { Cards } from "../../../redux/cards/types";
const LiveAuctions = () => {
  const { items, status } = useAppSelector((state) => state.card);

  const card: Cards[] = items
    .slice(0, 1)?.[0]
    ?.cards.map((e) => e)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <div className="liveAuctions">
      <div className="ornament"></div>
      <div className="container">
        <div className="liveAuctions__header">
          <h3 className="liveAuctions__title">Live Auctions</h3>
          <button className="liveAuctions__btn">Get Started</button>
        </div>
        <div className="liveAuctions__wrapper">
          {card &&
            card.map((item: Cards, i: number) => (
              <div className="liveAuctions__card" key={i}>
                <div className="liveAuctions__img-wrapper">
                  <img
                    src={item.img}
                    alt="avatar"
                    className="liveAuctions__avatar"
                  />
                  <div className="liveAuctions__backround-btn-like">
                    {/* <img src="" alt="like" /> */}
                  </div>
                </div>
                <div className="liveAuctions__wrapper-info">
                  <div className="liveAuctions__block-name">
                    <h6 className="liveAuctions__card-name">{item.name}</h6>
                  </div>
                  <div className="liveAuctions__onwer-info">
                    <div className="liveAuctons__owner-wrapper-img">
                      <img
                        src={item.avatar}
                        alt="avatar"
                        className="liveAuctions__onwner-foto"
                      />
                    </div>
                    <p className="liveAuctions__onwner-name">{item.author}</p>
                    <button className="liveAuctions__btn-buy">Buy</button>
                  </div>
                  <p className="liveAuctions__card-price">
                    {item.price.toLocaleString()} ₽
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LiveAuctions;
