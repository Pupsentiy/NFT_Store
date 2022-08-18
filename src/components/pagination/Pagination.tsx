import React from 'react'
import ReactPaginate from 'react-paginate'
import './Pagination.scss'
const Pagination = () => {
  return (
    <>
        <ReactPaginate
        className='pagination'
        breakLabel="..."
        nextLabel=">"
        onPageChange={e => console.log(e)}
        pageRangeDisplayed={12}
        pageCount={7}
        previousLabel="<"
        // renderOnZeroPageCount={null}
      />
    </>
  )
}

export default Pagination