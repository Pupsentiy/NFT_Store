import an from "../../../assets/img/liveAcions/anion.png";
import lis from "../../../assets/img/liveAcions/lis.png";
import robot from "../../../assets/img/liveAcions/robot.png";
import avatar from "../../../assets/img/liveAcions/avatar.png";
import "./LiveAuctions.scss";
const LiveAuctions = () => {
  // useEffect(() => {
  //   fetch('https://api.opensea.io/api/v1/assets')
  //     .then(res => res.json())
  //     .then((body) => {
  //       console.log(body);
  //     })

  // }, [])
  return (
    <div className="liveAuctions">
      <div className="ornament"></div>
      <div className="container">
        <div className="liveAuctions__header">
          <h3 className="liveAuctions__title">Live Auctions</h3>
          <button className="liveAuctions__btn">Get Started</button>
        </div>
        <div className="liveAuctions__wrapper">
          
          <div className="liveAuctions__card">
            <div className="liveAuctions__img-wrapper">
              <img src={an} alt="avatar" className="liveAuctions__avatar" />
              <div className="liveAuctions__backround-btn-like">
                {/* <img src="" alt="like" /> */}
              </div>
            </div>
            <div className="liveAuctions__wrapper-info">
              <div className="liveAuctions__block-name">
                <h6 className="liveAuctions__card-name">Dao Vinci #0000</h6>
                <p className="liveAuctions__card-price">price</p>
              </div>
              <div className="liveAuctions__onwer-info">
                <div className="liveAuctons__owner-wrapper-img">
                  <img
                    src={avatar}
                    alt="avatar"
                    className="liveAuctions__onwner-foto"
                  />
                </div>
                <p className="liveAuctions__onwner-name">@SalvadorDali</p>
                <button className="liveAuctions__btn-buy">Buy</button>
              </div>
            </div>
          </div>

          <div className="liveAuctions__card">
            <div className="liveAuctions__img-wrapper">
              <img src={lis} alt="avatar" className="liveAuctions__avatar" />
              {/* <img src="" alt="like" className='liveAuctions__btn-like' /> */}
            </div>
            <div className="liveAuctions__wrapper-info">
              <div className="liveAuctions__block-name">
                <h6 className="liveAuctions__card-name">Fangster #8668</h6>
                <p className="liveAuctions__card-price">price</p>
              </div>
              <div className="liveAuctions__onwer-info">
                <div className="liveAuctons__owner-wrapper-img">
                  <img
                    src={avatar}
                    alt="avatar"
                    className="liveAuctions__onwner-foto"
                  />
                </div>
                <p className="liveAuctions__onwner-name">@Kurrebe</p>
                <button className="liveAuctions__btn-buy">Buy</button>
              </div>
            </div>
          </div>

          <div className="liveAuctions__card">
            <div className="liveAuctions__img-wrapper">
              <img src={robot} alt="avatar" className="liveAuctions__avatar" />
              {/* <img src="" alt="like" className='liveAuctions__btn-like' /> */}
            </div>
            <div className="liveAuctions__wrapper-info">
              <div className="liveAuctions__block-name">
                <h6 className="liveAuctions__card-name">@Sherbet #3062</h6>
                <p className="liveAuctions__card-price">price</p>
              </div>
              <div className="liveAuctions__onwer-info">
                <div className="liveAuctons__owner-wrapper-img">
                  <img
                    src={avatar}
                    alt="avatar"
                    className="liveAuctions__onwner-foto"
                  />
                </div>
                <p className="liveAuctions__onwner-name">@Noche</p>
                <button className="liveAuctions__btn-buy">Buy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveAuctions;
