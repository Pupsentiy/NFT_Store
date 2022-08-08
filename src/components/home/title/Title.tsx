import { NavLink } from "react-router-dom";
import "./Title.scss";
import { useSelector } from "react-redux";
import { selectCardData } from "../../../redux/cards/selectors";
import linkup from "../../../assets/icons/discover_logo/linkup.svg";
import { Cards } from "../../../redux/cards/types";

const Title: React.FC = () => {
  const { items, status } = useSelector(selectCardData);

  const picture:Cards[] = items
    .map((e) =>  e)
    .sort(()=>Math.random()-0.5)
    .map((e) => e)
    .slice(0, 3);
    
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
          picture.map((pic:Cards, i:number) => (
            <div className="wrapper__picture" key={i}>
              <img className="picture" src={pic.img} alt="card" />
            </div>
          ))}
      </div>
      <nav className="wrapper__blockhain">
        <ul className="blockchain__items">
          {/* {blockChain &&
            blockChain.map((obj, i) => (
              <li className="blockchain__item" key={i}>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={obj.site}
                  className="blockchain__link"
                >
                  <img className="blockchain__link-logo" src={obj.logo} alt={obj.alt} />
                </a>
              </li>
            ))} */}
        </ul>
      </nav>
    </div>
  );
};

export default Title;
