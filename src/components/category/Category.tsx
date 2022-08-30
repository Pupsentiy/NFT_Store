import React, { useCallback } from "react";
import "./Category.scss";
import { setCategoryInnerHtml } from "../../redux/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import Sort from "../sort/Sort";

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
    <div className="wrapper-nav">
     <Sort/>
      <nav className="button-nav">
        {categories &&
          categories.map((item: string, i: number) => (
            <button
              className={categoryText === item ? "active" : "btn-nav"}
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
