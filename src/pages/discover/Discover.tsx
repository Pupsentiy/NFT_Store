import React, { useCallback, useEffect } from "react";
import CardsComponents from "../../components/cards/CardsComponents";
import Category from "../../components/category/Category";
import Pagination from "../../components/pagination/Pagination";
import Search from "../../components/search/Search";
import { fetchItems } from "../../redux/cards/asyncActions";
import { setCurrentPage } from "../../redux/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import "./Discover.scss";

const Discover: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useAppSelector((state) => state.card);
  const { categoryText, currentPage } = useAppSelector(
    (state) => state.filters
  );

  const getItems = async () => {
    const category = categoryText !== "All" ? categoryText : "";

    dispatch(
      fetchItems({
        category,
        currentPage: currentPage,
      })
    );
  };

  useEffect(() => {
    getItems();
  }, [categoryText, currentPage]);

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <div className="discover">
      <div className="container">
        <div className="discover__header">
          <h3>Explore Collectibles</h3>
          <Search />
        </div>
        <Category />
        <div className="discover__wrapper-cards">
          <CardsComponents value={items} />
        </div>
        <Pagination currentPage={currentPage} onChangePage={onChangePage} />
      </div>
    </div>
  );
};

export default Discover;
