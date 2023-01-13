import React from "react";
import Pagination from "./Pagination";
import TableFilters from "./TableFilters";
import TableHeader from "./TableHeader";
import TableBodyHandler from "./TableBodyHandler";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { DownloadCsv } from "../../../Util/helpers";
import { handleExcelExport } from "../../../Services/General";

export default function Table({
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
  backButton,
  dropDown,
  dropDownText,
  exportCSVUrl,
  priceFilter,
  priceFrom,
  setPriceFrom,
  // priceFromOptions,
  priceTo,
  setPriceTo,
  // priceToOptions,
}) {
  const navigate = useNavigate();

  return (
    <div className="content-body">
      <section id="configuration">
        <div className="box mb-3">
          <div className="d-md-flex alignment-xy-bw text-center">
            <div className="d-flex align-items-center my-3">
              {backButton && (
                <i
                  className="fas fa-arrow-left pe-3 go-back-icon section-heading"
                  onClick={() => navigate(-1)}
                />
              )}
              <h6 className="section-heading font-commons mb-0">{title}</h6>
            </div>
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

          {/* <div className="row">
          <div className="col-12"> */}
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
            priceFilter={priceFilter}
            priceFrom={priceFrom}
            setPriceFrom={setPriceFrom}
            // priceFromOptions={priceFromOptions}
            priceTo={priceTo}
            setPriceTo={setPriceTo}
            // priceToOptions={priceToOptions}
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
          {/* </div>
        </div> */}
        </div>
      </section>
    </div>
  );
}
