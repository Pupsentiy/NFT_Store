import React, { useCallback, useState } from "react";
import styled from "styled-components";

import { setCategoryInnerHtml } from "../../redux/filter/filterSlice";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";

import Sort from "../sort/Sort";
import Button from "../button/Button";

import { Flex } from "../../styles/global.styled";

const Category: React.FC = () => {
  const { categoryFilter } = useAppSelector(
    (state: RootState) => state.filters
  );
  const dispatch = useAppDispatch();

  const categories: string[] = [
    "All",
    "Premium",
    "Art",
    "Sports",
    "Entertainment",
    "Gaming",
    "Collectibles",
    "NFT for Good",
  ];

  const onChangeCategory = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const cat = (e.target as HTMLButtonElement).innerHTML;
      dispatch(setCategoryInnerHtml(cat));
    },
    [categoryFilter]
  );
  return (
    <Flex marginTop={"50px"}>
      <Sort />
      <Flex justifyContent={"space-between"} width={"100%"}>
        {categories &&
          categories.map((item: string, i: number) => (
            <div key={i}>
              <Button
                type="button"
                active={categoryFilter === item ?? true}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  onChangeCategory(e)
                }
                
                //styles
                fontSize="12px"
                background="#1e50ff1a"
                padding="5px 5px"
                width="100px"
                height="50px"
              >{item}</Button>
            </div>
          ))}
      </Flex>
    </Flex>
  );
};

export default Category;
