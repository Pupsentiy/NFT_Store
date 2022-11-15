import React from "react";

import { Flex, StyledReactPaginate } from "../../styles/global.styled";

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
        marginPagesDisplayed={2}
        pageCount={10}
        previousLabel="<"
        forcePage={currentPage - 1}
      />
    </Flex>
  );
};

export default Pagination;
