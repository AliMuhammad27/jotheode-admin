import React from "react";
import Pagination from "./Pagination";
import TableBodyHandler from "./TableBodyHandler";
import TableFilters from "./TableFilters";
import TableHeader from "./TableHeader";

const ComponentTable = ({
  title,
  headings,
  setSearchString,
  totalPages,
  totalDocs,
  setPage,
  data,
  children,
  isLoading,
  status_options,
  status_label,
  status,
  setStatus,
  perPage,
  setPerPage,
  from,
  setFrom,
  to,
  setTo,
  isFetching,
}) => {
  return (
    <div
      className="tab-pane fade show active"
      id="pills-book"
      role="tabpanel"
      aria-labelledby="pills-book-tab"
    >
      <h6 className="section-heading font-commons my-4">{title}</h6>
      <TableFilters
        setSearchString={setSearchString}
        status_options={status_options}
        status_label={status_label}
        status={status}
        setStatus={setStatus}
        perPage={perPage}
        setPerPage={setPerPage}
        from={from}
        setFrom={setFrom}
        to={to}
        setTo={setTo}
        isFetching={isFetching}
      />
      {/* Table Start */}
      <div className="dataTables_wrapper">
        <div className="row row-table">
          <div className="main-tabble table-responsive">
            <div className="dataTables_wrapper container-fluid dt-bootstrap4">
              <div className="row">
                <div className="col-sm-12">
                  <table className="table table-borderless dataTable">
                    <TableHeader headings={headings} />
                    <TableBodyHandler
                      data={data}
                      length={headings?.length}
                      isLoading={isLoading}
                    />
                    {children}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Table End */}
      {/* Pagination Start */}
      <Pagination
        currentDocs={data?.length}
        totalPages={totalPages}
        setPage={setPage}
        totalDocs={totalDocs}
      />
      {/* Pagination End */}
    </div>
  );
};

export default ComponentTable;
