import React from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({
  currentDocs,
  totalDocs,
  totalPages,
  setPage,
}) {
  return (
    <div className="row align-items-center py-4 table-responsive">
      <div className="col-lg-5 col-sm-12 col-md-12">
        <h6 className="pagination-details">
          {/* Showing 05 out of 40 records */}
          {/* Showing 1 to 2 of {totalDocs} entries  */}
          Showing {currentDocs} out of {totalDocs} records
        </h6>
      </div>
      <div className="col-lg-7 col-sm-12 col-md-12">
        <div
          className="customPagination dataTables_paginate paging_simple_numbers"
          id="DataTables_Table_0_paginate"
        >
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            previousClassName={
              "paginate_button page-item previous page-link disabled"
            }
            nextClassName={"paginate_button page-item next page-link disabled"}
            // breakLabel={"..."}
            // breakClassName={"break-me"}
            pageCount={totalPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={1}
            onPageChange={(page) => setPage(page.selected + 1)}
            // containerClassName={"pagination"}
            activeClassName={"active"}
            className={
              "justify-content-end pagination"
              // "pagination_wrapper d-flex align-items-center justify-content-center"       // will be used in inner div inside ul
            }
            pageLinkClassName={"page-link"}
            pageClassName={"paginate_button page-item"}
          />
        </div>
      </div>
    </div>
  );
}
