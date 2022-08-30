import "./LiveAuctions.scss";
import { useAppSelector } from "../../../redux/store";
import { Cards } from "../../../redux/cards/types";
import CardsComponents from "../../cards/CardsComponents";
import { NavLink } from "react-router-dom";
import { SceletonCards } from "../../cards/SceletonCards";

const LiveAuctions: React.FC  = () => {
  const { items, status } = useAppSelector((state) => state.card);
  const card: Cards[] = items.map((e) => e).sort(() => Math.random() - 0.5).slice(0, 3);

const sceletonsCards = [... new Array(3)].map((_, index) => <SceletonCards key={index}/>)


  return (
    <div className="liveAuctions">
      <div className="ornament"></div>
      <div className="container">
        <div className="liveAuctions__header">
          <h3 className="liveAuctions__title">Live Auctions</h3>
          <button className="liveAuctions__btn"><NavLink to="/discover">Get Started</NavLink></button>
        </div>
        <div className="liveAuctions__wrapper">
          {status === 'loading' ? sceletonsCards :
          <CardsComponents value={card}/>
          }
        </div>
      </div>
    </div>
  );
};

export default LiveAuctions;
