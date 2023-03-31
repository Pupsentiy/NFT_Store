import { FC, useCallback } from "react";

import {useAppDispatch, useAppSelector} from "../../hooks/hooks";

import { setCategoryInnerHtml, setCurrentPage } from "../../redux/filter/filterSlice";

import Sort from "../sort/Sort";
import Button from "../button/Button";

import { categories } from "../../utils/constants/constants";

import { Flex } from "../../assets/styles/global.styled";

const Category: FC = () => {
  const dispatch = useAppDispatch();
  const { categoryFilter } = useAppSelector(
    (state) => state.filters
  );

  const onChangeCategory = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const cat = (e.target as HTMLButtonElement).innerHTML;
      dispatch(setCategoryInnerHtml(cat));
      dispatch(setCurrentPage(1))
    },
    [dispatch]
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
