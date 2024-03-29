import React from "react";

import { Flex } from "../../assets/styles/global.styled";
import { StyledReactPaginate } from "./Pagination.styled";

import { PaginationProps } from "./Pagination.types";

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  onChangePage,
}) => {
  return (
    <Flex marginTop="40px">
      <StyledReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => onChangePage(e.selected + 1)}
        pageRangeDisplayed={2}
        marginPagesDisplayed={0}
        pageCount={10}
        previousLabel="<"
        forcePage={currentPage - 1}
      />
    </Flex>
  );
};

export default Pagination;
