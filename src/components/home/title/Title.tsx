import { NavLink } from "react-router-dom";
import "./Title.scss";
import binance from "../../../assets/icons/discover_logo/binance.svg";
import trust from "../../../assets/icons/discover_logo/trustWallet.svg";
import metamask from "../../../assets/icons/discover_logo/metamask.svg";
import coinbase from "../../../assets/icons/discover_logo/coinbase.svg";
import toko from "../../../assets/icons/discover_logo/toko.svg";
import linkup from "../../../assets/icons/discover_logo/linkup.svg";
import { useSelector } from "react-redux";
import { selectCardData } from "../../../redux/cards/selectors";


const Title: React.FC = () => {
  const { items, status } = useSelector(selectCardData);

  const picture = items
    .map((e) => [Math.random(), e])
    .sort()
    .map((e) => e[1])
    .slice(0, 3); 
//поправить интерфейс Cards[]

  return (
    <div className="title">
      <div className="container">
        <div className="ornament"></div>
        <div className="title__title">
          <div className="title-text">
            <h3> Discover a New Era of Crypto Currency</h3>
          </div>

          <div className="title__discription">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <NavLink className="start__link" to="#">
              Get Started
              <img src={linkup} alt="img" />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="title__picture">
        {picture &&
          picture.map((pic:any, i: number) => (
            <div className="wrapper__picture" key={i}>
              <img className="picture" src={pic.img} alt="card" />
            </div>
          ))}
      </div>
      <nav className="wrapper__blockhain">
        <ul className="blockchain__items">
          <li className="blockchain__item">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://binance.com/ru"
              className="blockhain__link"
            >
              <img src={binance} alt="blockhain" />
            </a>
          </li>
          <li className="blockchain__item">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://trustwallet.com/ru/"
              className="blockhain__link"
            >
              <img src={trust} alt="blockhain" />
            </a>
          </li>
          <li className="blockchain__item">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://metamask.io/"
              className="blockhain__link"
            >
              <img src={metamask} alt="blockhain" />
            </a>
          </li>
          <li className="blockchain__item">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.coinbase.com/ru/"
              className="blockhain__link"
            >
              <img src={coinbase} alt="blockhain" />
            </a>
          </li>
          <li className="blockchain__item">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.tokocrypto.com/"
              className="blockhain__link"
            >
              <img className="blockchain__logo" src={toko} alt="blockhain" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Title;
