import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import CardsComponents from "../../components/cards/CardsComponents";
import Category from "../../components/category/Category";
import Pagination from "../../components/pagination/Pagination";
import { fetchItems } from "../../redux/cards/asyncActions";
import { Cards } from "../../redux/cards/types";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import "./Discover.scss";

const Discover: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useAppSelector((state) => state.card);
  const { categoryText,currentPage } = useAppSelector((state) => state.filters);

  const getItems = async () => {
    const category = categoryText !== 'All' ? categoryText : '';

    dispatch(
      fetchItems({
        category,
        currentPage:currentPage
    }));
  };
  useEffect(() => {
    getItems();
  }, [categoryText, currentPage]);


  // const onChangePage = () => {
  //   useDispatch(setPageCount())
  // }
  
  
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
        <Category/>
        <div className="discover__wrapper-cards">
          <CardsComponents value={items} />
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default Discover;
