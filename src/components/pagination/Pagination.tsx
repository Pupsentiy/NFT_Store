import React from 'react'
import ReactPaginate from 'react-paginate'
import './Pagination.scss'

type PaginationProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
};

const Pagination:React.FC<PaginationProps> = ({currentPage,onChangePage}) => {

  return (
    <>
        <ReactPaginate
        className='pagination'
        breakLabel="..."
        nextLabel=">"
        onPageChange={e => onChangePage(e.selected + 1)}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={10}
        previousLabel="<"
        forcePage={currentPage - 1}
      />
    </>
  )
}

export default Pagination