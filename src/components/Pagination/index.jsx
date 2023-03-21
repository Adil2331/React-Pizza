import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.modul.scss';

function Pagination({ currentPage, onchangePage }) {
  return (
    <ReactPaginate
      className="root"
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onchangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - 1}
      previousLabel="<"
      renderOnZeroPageCount={null}
      // onchangePage(event.selected + 1)
    />
  );
}

export default Pagination;
