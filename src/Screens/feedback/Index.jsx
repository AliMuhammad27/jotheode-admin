import React from "react";
const Index = () => {
  return (
    <div class="configuration">
      <div class="container-fluid">
        <div class="box">
          <div class="row align-items-center mb-4">
            <div class="col-12">
              <h1 class="pageTitle text-capitalize m-0">Feedback Management</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="row mb-2">
                <div class="col-12">
                  <div class="customFilters my-3">
                    <div class="d-xl-flex align-items-baseline justify-content-between mb-xl-3">
                      <div class="userInput mb-3">
                        <label class="mainLabel d-inline-block">Show:</label>
                        <select class="d-inline-block mainInput dashInput smDropDown">
                          <option value="10" selected>
                            10
                          </option>
                          <option value="20">20</option>
                          <option value="30">30</option>
                          <option value="40">40</option>
                          <option value="50">50</option>
                        </select>
                        <label class="mainLabel d-inline-block">Entries</label>
                      </div>
                      <div class="userInput mb-3">
                        <div class="d-xl-flex align-items-center justify-content-end">
                          <div class="dashSearchWrap">
                            <form action="" method="POST">
                              <input
                                type="search"
                                id="searchInput"
                                class="mainInput dashInput search-input w-100"
                                placeholder="Search"
                              />
                              <button type="button" class="searchIcon">
                                <i class="fas fa-search"></i>
                              </button>
                            </form>
                          </div>
                          <div class="dropFilter">
                            <button
                              class="btn primaryButton ms-3"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i class="fas fa-filter"></i>
                            </button>
                            <div class="dropdown-menu filterDropdown">
                              <div class="filterDropdownHeader">
                                <p class="mainLabel m-0">Filter</p>
                              </div>
                              <div class="dropdown-divider"></div>
                              <div class="filterDropdownBody">
                                <div class="userInput mb-3">
                                  <label for="" class="mainLabel">
                                    Creation Date:
                                  </label>
                                  <div class="mb-2">
                                    <input
                                      class="mainInput filterInput"
                                      type="date"
                                    />
                                  </div>
                                  <div class="mb-2">
                                    <input
                                      class="mainInput filterInput"
                                      type="date"
                                    />
                                  </div>
                                </div>
                                <div class="userInput mb-3">
                                  <label for="" class="mainLabel">
                                    Filter by Status:
                                  </label>
                                  <div class="mb-2">
                                    <select
                                      name=""
                                      id=""
                                      class="mainInput filterInput"
                                    >
                                      <option value="s">Select Status</option>
                                      <option value="1">Active</option>
                                      <option value="2">Inactive</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="filterAction">
                                  <button
                                    type="button"
                                    class="mainButton primaryButton"
                                  >
                                    Apply
                                  </button>
                                </div>
                                <div class="filterAction">
                                  <button
                                    type="button"
                                    class="mainButton primaryButton2"
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
              {/* <!-- Filters Ends Here -->

                  <!-- Table Starts Here --> */}
              <div class="row">
                <div class="col-12">
                  <div class="customTable table-responsive">
                    <table class="table table-borderless w-100">
                      <thead>
                        <tr>
                          <th>S. No.</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Register On</th>
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
                            <a href="./feedback-details.php">
                              <i class="fas fa-eye primaryColor"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>02</td>
                          <td>kuame3008</td>
                          <td>email@email.com</td>
                          <td>mm/dd/yyyy</td>
                          <td>
                            <a href="./feedback-details.php">
                              <i class="fas fa-eye primaryColor"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>03</td>
                          <td>kuame3008</td>
                          <td>email@email.com</td>
                          <td>mm/dd/yyyy</td>
                          <td>
                            <a href="./feedback-details.php">
                              <i class="fas fa-eye primaryColor"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>04</td>
                          <td>kuame3008</td>
                          <td>email@email.com</td>
                          <td>mm/dd/yyyy</td>
                          <td>
                            <a href="./feedback-details.php">
                              <i class="fas fa-eye primaryColor"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>05</td>
                          <td>kuame3008</td>
                          <td>email@email.com</td>
                          <td>mm/dd/yyyy</td>
                          <td>
                            <a href="./feedback-details.php">
                              <i class="fas fa-eye primaryColor"></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    {/* <!-- Pagination starts --> */}
                    <div class="d-flex align-items-center justify-content-between flex-wrap">
                      <h6 class="pagination-details mb-3">
                        {" "}
                        Showing 05 out of 40 records{" "}
                      </h6>
                      <div class="customPagination mb-3">
                        <nav aria-label="Page navigation example">
                          <ul class="pagination">
                            <li class="page-item">
                              <a class="page-link" href="#">
                                Previous
                              </a>
                            </li>
                            <li class="page-item active">
                              <a class="page-link" aria-current="page" href="#">
                                1
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#">
                                2
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#">
                                3
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#">
                                4
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#">
                                5
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#">
                                Next
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                    {/* <!-- Pagination Ends --> */}
                  </div>
                </div>
              </div>
              {/* <!-- Table Ends Here --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
