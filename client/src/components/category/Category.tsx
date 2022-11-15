import React, { useCallback } from "react";
import styled from "styled-components";

import { setCategoryInnerHtml } from "../../redux/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import Sort from "../sort/Sort";

import { Flex } from "../../styles/global.styled";

export const ButtonEll = styled.button`
  width: 100px;
  font-size: 14px;
  color: #ffffff;
  font-weight: 500;
  line-height: 24px;
  background: #1e50ff1a;
  height: 50px;
  border-radius: 8px;
  border: solid 1px #1e50ff;
  cursor: pointer;

  &:active {
    font-size: 14px;
    color: #ffffff;
    font-weight: 500;
    line-height: 24px;
    background: #1e50ff;
    width: 100px;
    height: 50px;
    border-radius: 8px;
    border: none;
    -webkit-box-shadow: 0px 0px 16px 4px rgba(30, 80, 255, 0.71);
    -moz-box-shadow: 0px 0px 16px 4px rgba(30, 80, 255, 0.71);
    box-shadow: 0px 0px 16px 4px rgba(30, 80, 255, 0.71);
  }
`;

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

  const onChangeCategory = useCallback(
    (cat: string) => {
      dispatch(setCategoryInnerHtml(cat));
    },
    [categoryText]
  );
  return (
    <Flex marginTop={"50px"}>
      <Sort />
      <Flex justifyContent={"space-between"} width={"100%"}>
        {categories &&
          categories.map((item: string, i: number) => (
            <ButtonEll
              key={i}
              onClick={(e) => onChangeCategory((e.target as Element).innerHTML)}
            >
              {item}
            </ButtonEll>
          ))}
      </Flex>
    </Flex>
  );
};

export default Category;
