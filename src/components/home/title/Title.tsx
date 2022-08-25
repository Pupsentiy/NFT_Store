import { NavLink } from "react-router-dom";
import "./Title.scss";
import linkup from "../../../assets/icons/discover_logo/linkup.svg";
import { useAppSelector } from "../../../redux/store";
import { Cards } from "../../../redux/cards/types";
import { Platforms } from "../../../redux/platform/types";

const Title: React.FC = () => {
  const { items, status } = useAppSelector((state) => state.card);
  const {platforms, statusPlatform} = useAppSelector((state) => state.platform)
  console.log(platforms)
  const picture:Cards[] = items.map((e) => e)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <div className="title">
      <div className="container">
        <div className="ornament"></div>
        <div className="title__title">
          <div className="title-text">
            <h2> Discover a New Era of Crypto Currency</h2>
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
          picture.map((pic: Cards, i: number) => (
            <div className="wrapper__picture" key={i}>
              <img className="picture" src={pic.img} alt="card" />
            </div>
          ))}
      </div>
       <nav className="wrapper__blockhain">
        <ul className="blockchain__items">
          {/* {platforms &&
            platforms.map((platform:Platforms, i: number) => (
              <li className="blockchain__item" key={i}>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={platform.site}
                  className="blockchain__link"
                >
                  <img
                    className="blockchain__link-logo"
                    src={platform.logo}
                    alt={platform.alt}
                  />
                </a>
              </li>
            ))}  */}
        </ul>
      </nav>
    </div>
  );
};

export default Title;
