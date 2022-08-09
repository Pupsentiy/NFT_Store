import { NavLink } from "react-router-dom";
import "./Title.scss";
import linkup from "../../../assets/icons/discover_logo/linkup.svg";
import { useAppSelector } from "../../../redux/store";
import { Cards, Platforms } from "../../../redux/cards/types";

const Title: React.FC = () => {
  const { items, status } = useAppSelector((state) => state.card);

  const picture: Cards[] = items
    .slice(0, 1)?.[0]
    ?.cards.map((e) => e)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  const platform: Platforms[] = items.slice(1, 2)?.[0]?.platform;

  console.log(platform);
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
          picture.map((pic: Cards, i: number) => (
            <div className="wrapper__picture" key={i}>
              <img className="picture" src={pic.img} alt="card" />
            </div>
          ))}
      </div>
      <nav className="wrapper__blockhain">
        <ul className="blockchain__items">
          {platform &&
            platform.map((platform: Platforms, i: number) => (
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
            ))}
        </ul>
      </nav>
    </div>
  );
};

export default Title;
