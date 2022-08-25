import React, { useCallback } from "react";
import "./Category.scss";
import { setCategoryInnerHtml } from "../../redux/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";

const Category: React.FC = () => {
  const { categoryText } = useAppSelector((state) => state.filters);
  const dispatch = useAppDispatch();

  const categories = [
    "All",
    "Premium",
    "Art",
    "Sports",
    "Entertainment",
    "Gaming",
    "Collectibles",
    "Esports",
    "NFT for Good",
  ];

  const onChangeCategory = useCallback((cat: string) => {
    dispatch(setCategoryInnerHtml(cat));
  }, []);
  return (
    <div className="discover__wrapper-nav">
      {/* <div className="discover__wrapper-select">
                  <select name="select" id="" className='discover__select'>
                        <option value="Sort By" className='discover__select-item' >Sort By</option>
                  </select>
                </div> */}
      <nav className="discover__button-nav">
        {categories &&
          categories.map((item: string, i: number) => (
            <button
              className={categoryText === item ? "active" : "discover__btn-nav"}
              key={i}
              onClick={(e) => onChangeCategory((e.target as Element).innerHTML)}
            >
              {item}
            </button>
          ))}
      </nav>
    </div>
  );
};

export default Category;
