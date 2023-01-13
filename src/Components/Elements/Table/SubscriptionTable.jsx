import React from "react";
import { Link } from "react-router-dom";
import { handleExcelExport } from "../../../Services/General";
// import { DownloadCsv } from "../../../Util/helpers";
import Pagination from "./Pagination";
import TableBodyHandler from "./TableBodyHandler";
import TableFilters from "./TableFilters";
import TableHeader from "./TableHeader";

const SubscriptionTable = ({
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
  statusLog,
  add,
  addLink,
  addText,
  title,
  durationFilter,
  setDurationFilter,
  durationFilterOptions,
  planFilter,
  setPlanFilter,
  planFilterOptions,
  dropDown,
  dropDownText,
  exportCSVUrl,
}) => {
  return (
    <>
      <div className="subscriptionTable mb-4">
        <div className="d-md-flex alignment-xy-bw text-center">
          <h1 className="section-heading font-commons my-2 mb-4">{title}</h1>
          {!statusLog && (
            <a href="#_" className="main-primarybtns my-2 mb-4">
              Export
            </a>
          )}
          {add && (
            <Link to={addLink} className="main-primarybtns my-2 mb-4">
              {addText}
            </Link>
          )}
          {dropDown && (
            <div class="dropdown">
              <button
                class="btn dropdown-toggle dropDownButton"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {dropDownText}
              </button>
              <ul
                class="dropdown-menu dropDownMenu"
                aria-labelledby="dropdownMenuButton1"
              >
                {/* <li>
                  <button type="button" className="dropdown-item">
                    Export as PDF
                  </button>
                </li> */}
                <li>
                  {/* <a
                    className="dropdown-item"
                    href={exportCSVUrl && DownloadCsv(exportCSVUrl)}
                  >
                    Export as Excel
                  </a> */}
                  <button
                    type="button"
                    className="dropdown-item"
                    onClick={() =>
                      exportCSVUrl && handleExcelExport(exportCSVUrl)
                    }
                  >
                    Export as Excel
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
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
          durationFilter={durationFilter}
          setDurationFilter={setDurationFilter}
          durationFilterOptions={durationFilterOptions}
          planFilter={planFilter}
          setPlanFilter={setPlanFilter}
          planFilterOptions={planFilterOptions}
        />
        <div className="shadow-none">
          <div className="white-div-2 px-lg-3 py-lg-1 mt-3">
            <div className="row mt-md-1">
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
                  <Pagination
                    currentDocs={data?.length}
                    totalDocs={totalDocs}
                    totalPages={totalPages}
                    setPage={setPage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscriptionTable;
