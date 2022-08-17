import React from "react";
import { useAppSelector } from "../../redux/store";
import "./Discover.scss";

const Discover = () => {
  const { items, status } = useAppSelector((state) => state.card);

  const category:string[] = items.filter(e => (e.cards))?.[0]?.cards.map(e => e.category).filter((e,i,a) => a.indexOf(e) === i)
  console.log(category)
  return (
    <div className="discover">
      <div className="container">
        <div className="discover__header">
          <h3>Explore Collectibles</h3>
          <input
            type="text"
            className="discover__search"
            placeholder="Type your keywords . . ."
          />
        </div>

        <div className="discover__wrapper-nav">
          {/* <div className="discover__wrapper-select">
                  <select name="select" id="" className='discover__select'>
                        <option value="Sort By" className='discover__select-item' >Sort By</option>
                  </select>
                </div> */}
            <nav className="discover__button-nav" >
                <button className="discover__btn-nav">All</button>
         {
           category && category.map((item:string, i:number) => (
           <button className="discover__btn-nav" key={i}>{item}</button>
           ))
         }
         </nav>

        </div>

        <button className="vievMore">Viev More</button>
      </div>
    </div>
  );
};

export default Discover;
