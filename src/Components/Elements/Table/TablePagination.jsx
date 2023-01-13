import React from "react";

export default function TablePagination({ perPage, setPerPage }) {
  return (
    // <div className="col-lg-4">
    //   <div className="d-flex align-items-center">
    //     <div className="mr-1 mt-1">
    //       <p className="fw-600 mb-0">Show</p>
    //     </div>
    //     <div className="mr-1 mt-1">
    //       <select
    //         value={perPage}
    //         onChange={(e) => setPerPage(e.target.value)}
    //         className="form-control input1"
    //         id
    //       >
    //         <option value={10}>10</option>
    //         <option value={25}>25</option>
    //         <option value={50}>50</option>
    //         <option value={100}>100</option>
    //       </select>
    //     </div>
    //     <div className="mr-1 mt-1">
    //       <p className="fw-600 mb-0">Entries</p>
    //     </div>
    //   </div>
    // </div>

    <div className="align-items-center d-flex mb-2 me-lg-4">
      <label className="cGray  d-inline-block mb-1 mb-xl-0 me-2">Show</label>
      <select
        className="cGray  d-inline-block select-filter sm-dropdown me-2"
        value={perPage}
        onChange={(e) => setPerPage(e.target.value)}
      >
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
      <label className="cGray  d-inline-block mb-1 mb-xl-0 ml-1">Entries</label>
    </div>
  );
}
