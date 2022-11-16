import React, { useEffect } from "react";
import styled from "styled-components";

import CardsComponents from "../../components/cards/CardsComponents";
import Category from "../../components/category/Category";
import Pagination from "../../components/pagination/Pagination";
import Search from "../../components/search/Search";

import { fetchItems } from "../../redux/cards/asyncActions";
import { setCurrentPage } from "../../redux/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";

import { ContainerEl, Flex, H3 } from "../../styles/global.styled";

export const GridEl = styled.div`
margin-top:60px;
display: grid;
grid-template-rows: 1fr 1fr 1fr;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 0.7vw;
`

const Discover = () => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.card);
  const { categoryFilter, currentPage, searchValue, sort } = useAppSelector(
    (state) => state.filters
  );

  const getItems = async () => {
    const category = categoryFilter !== "All" ? categoryFilter : "";
    const search = searchValue;
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = sort.sortProperty.replace("-", "");
    dispatch(
      fetchItems({
        sortBy,
        order,
        category,
        currentPage: currentPage,
        search,
      })
    );
  };

  useEffect(() => {
    getItems();
  }, [categoryFilter, currentPage, searchValue, sort.sortProperty]);

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
      <ContainerEl >
        <Flex flexDirection={'column'} alignItems={'center'} marginTop={'120px'}>
          <H3>Explore Collectibles</H3>
          <Search />
        </Flex>
        <Category />
        <GridEl >
          <CardsComponents value={items} />
        </GridEl>
        <Pagination currentPage={currentPage} onChangePage={onChangePage} />
      </ContainerEl>
  );
};

export default Discover;
