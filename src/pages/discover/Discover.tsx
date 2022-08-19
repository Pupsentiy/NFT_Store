import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import CardsComponents from "../../components/cards/CardsComponents";
import Pagination from "../../components/pagination/Pagination";
import { fetchItems } from "../../redux/cards/asyncActions";
import { Cards } from "../../redux/cards/types";
import { setCategoryId, setCurrentPage } from "../../redux/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import "./Discover.scss";

const Discover: React.FC = () => {
  const { items, status } = useAppSelector((state) => state.card);
  const dispatch = useAppDispatch();
  const { categoryText } = useAppSelector((state) => state.filters);

  const getItems = async () => {
    dispatch(fetchItems());
  };

  useEffect(() => {
    getItems();
  }, []);
  const card: Cards[] = items.filter(e => e.cards)?.[0]
  ?.cards.map((e) => e)

  const category: string[] = items
    .filter((e) => e.cards)?.[0]
    ?.cards.map((e) => e.category)
    .filter((e, i, a) => a.indexOf(e) === i);
  const categoryes: string[] = category && ["All", ...category];
  // const onChangePage = () => {
  //   useDispatch(setPageCount())
  // }
  const onChangeCategory = (cat: string) => {
    dispatch(setCategoryId(cat));
  };
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
          <nav className="discover__button-nav">
            {categoryes &&
              categoryes.map((item: string, i: number) => (
                <button
                  className={
                    categoryText === item ? "active" : "discover__btn-nav"
                  }
                  key={i}
                  onClick={(e) =>
                    onChangeCategory((e.target as Element).innerHTML)
                  }
                >
                  {item}
                </button>
              ))}
          </nav>
        </div>
        <div className="discover__wrapper-cards">
        <CardsComponents value={card}/>
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default Discover;
