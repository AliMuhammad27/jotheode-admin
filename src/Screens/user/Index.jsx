import React from "react";

const Index = () => {
  return (
    <div className="configuration">
      <div className="container-fluid">
        <div className="box">
          <div className="row align-items-center mb-4">
            <div className="col-12">
              <h1 className="pageTitle text-capitalize m-0">
                Users Management
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {/* Filters Starts Here */}
              <div className="row mb-2">
                <div className="col-12">
                  <div className="customFilters my-3">
                    <div className="d-xl-flex align-items-baseline justify-content-between mb-xl-3">
                      <div className="userInput mb-3">
                        <label className="mainLabel d-inline-block">
                          Show:
                        </label>
                        <select className="d-inline-block mainInput dashInput smDropDown">
                          <option value={10} selected>
                            10
                          </option>
                          <option value={20}>20</option>
                          <option value={30}>30</option>
                          <option value={40}>40</option>
                          <option value={50}>50</option>
                        </select>
                        <label className="mainLabel d-inline-block">
                          Entries
                        </label>
                      </div>
                      <div className="userInput mb-3">
                        <div className="d-xl-flex align-items-center justify-content-end">
                          <div className="dashSearchWrap">
                            <form action method="POST">
                              <input
                                type="search"
                                id="searchInput"
                                className="mainInput dashInput search-input w-100"
                                placeholder="Search"
                              />
                              <button type="button" className="searchIcon">
                                <i className="fas fa-search" />
                              </button>
                            </form>
                          </div>
                          <div className="dropFilter">
                            <button
                              className="btn primaryButton ms-3"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fas fa-filter" />
                            </button>
                            <div className="dropdown-menu filterDropdown">
                              <div className="filterDropdownHeader">
                                <p className="mainLabel m-0">Filter</p>
                              </div>
                              <div className="dropdown-divider" />
                              <div className="filterDropdownBody">
                                <div className="userInput mb-3">
                                  <label htmlFor className="mainLabel">
                                    Creation Date:
                                  </label>
                                  <div className="mb-2">
                                    <input
                                      className="mainInput filterInput"
                                      type="date"
                                    />
                                  </div>
                                  <div className="mb-2">
                                    <input
                                      className="mainInput filterInput"
                                      type="date"
                                    />
                                  </div>
                                </div>
                                <div className="userInput mb-3">
                                  <label htmlFor className="mainLabel">
                                    Filter by Status:
                                  </label>
                                  <div className="mb-2">
                                    <select
                                      name
                                      id
                                      className="mainInput filterInput"
                                    >
                                      <option value="s">Select Status</option>
                                      <option value={1}>Active</option>
                                      <option value={2}>Inactive</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="filterAction">
                                  <button
                                    type="button"
                                    className="mainButton primaryButton"
                                  >
                                    Apply
                                  </button>
                                </div>
                                <div className="filterAction">
                                  <button
                                    type="button"
                                    className="mainButton primaryButton2"
                                  >
                                    Clear All
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Filters Ends Here */}
              {/* Table Starts Here */}
              <div className="row">
                <div className="col-12">
                  <div className="customTable table-responsive">
                    <table className="table table-borderless w-100">
                      <thead>
                        <tr>
                          <th>S. No.</th>
                          <th>Name</th>
                          <th>Email Address</th>
                          <th>Registered On</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>01</td>
                          <td>kuame3008</td>
                          <td>email@email.com</td>
                          <td>mm/dd/yyyy</td>
                          <td>
                            <button
                              type="button"
                              className="btn dropdown-toggle transparent-btn green"
                              data-bs-toggle="dropdown"
                            >
                              Active
                            </button>
                            <div className="dropdown-menu text-left customDropdown">
                              <button
                                className="dropdown-item red dropButton"
                                data-bs-toggle="modal"
                                data-bs-target="#inactiveUser"
                              >
                                <i className="fas fa-times me-2" />
                                Inactive
                              </button>
                            </div>
                          </td>
                          <td>
                            <a href="./user-details.php">
                              <i className="fas fa-eye primaryColor" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>02</td>
                          <td>kuame3008</td>
                          <td>email@email.com</td>
                          <td>mm/dd/yyyy</td>
                          <td>
                            <button
                              type="button"
                              className="btn dropdown-toggle transparent-btn red"
                              data-bs-toggle="dropdown"
                            >
                              Inactive
                            </button>
                            <div className="dropdown-menu text-left customDropdown">
                              <button
                                className="dropdown-item  green dropButton"
                                data-bs-toggle="modal"
                                data-bs-target="#activeUser"
                              >
                                <i className="fas fa-check me-2" />
                                Active
                              </button>
                            </div>
                          </td>
                          <td>
                            <a href="./user-details.php">
                              <i className="fas fa-eye primaryColor" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>03</td>
                          <td>kuame3008</td>
                          <td>email@email.com</td>
                          <td>mm/dd/yyyy</td>
                          <td>
                            <button
                              type="button"
                              className="btn dropdown-toggle transparent-btn green"
                              data-bs-toggle="dropdown"
                            >
                              Active
                            </button>
                            <div className="dropdown-menu text-left customDropdown">
                              <button
                                className="dropdown-item red dropButton"
                                data-bs-toggle="modal"
                                data-bs-target="#inactiveUser"
                              >
                                <i className="fas fa-times me-2" />
                                Inactive
                              </button>
                            </div>
                          </td>
                          <td>
                            <a href="./user-details.php">
                              <i className="fas fa-eye primaryColor" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>04</td>
                          <td>kuame3008</td>
                          <td>email@email.com</td>
                          <td>mm/dd/yyyy</td>
                          <td>
                            <button
                              type="button"
                              className="btn dropdown-toggle transparent-btn green"
                              data-bs-toggle="dropdown"
                            >
                              Active
                            </button>
                            <div className="dropdown-menu text-left customDropdown">
                              <button
                                className="dropdown-item red dropButton"
                                data-bs-toggle="modal"
                                data-bs-target="#inactiveUser"
                              >
                                <i className="fas fa-times me-2" />
                                Inactive
                              </button>
                            </div>
                          </td>
                          <td>
                            <a href="./user-details.php">
                              <i className="fas fa-eye primaryColor" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>05</td>
                          <td>kuame3008</td>
                          <td>email@email.com</td>
                          <td>mm/dd/yyyy</td>
                          <td>
                            <button
                              type="button"
                              className="btn dropdown-toggle transparent-btn green"
                              data-bs-toggle="dropdown"
                            >
                              Active
                            </button>
                            <div className="dropdown-menu text-left customDropdown">
                              <button
                                className="dropdown-item red dropButton"
                                data-bs-toggle="modal"
                                data-bs-target="#inactiveUser"
                              >
                                <i className="fas fa-times me-2" />
                                Inactive
                              </button>
                            </div>
                          </td>
                          <td>
                            <a href="./user-details.php">
                              <i className="fas fa-eye primaryColor" />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    {/* Pagination starts */}
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <h6 className="pagination-details mb-3">
                        {" "}
                        Showing 05 out of 40 records{" "}
                      </h6>
                      <div className="customPagination mb-3">
                        <nav aria-label="Page navigation example">
                          <ul className="pagination">
                            <li className="page-item">
                              <a className="page-link" href="#">
                                Previous
                              </a>
                            </li>
                            <li className="page-item active">
                              <a
                                className="page-link"
                                aria-current="page"
                                href="#"
                              >
                                1
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                2
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                3
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                4
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                5
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                Next
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                    {/* Pagination Ends */}
                  </div>
                </div>
              </div>
              {/* Table Ends Here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
