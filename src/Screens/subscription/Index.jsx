import React from "react";

const Index = () => {
  return (
    <div class="configuration">
      <div class="container-fluid">
        <div class="box mb-3">
          <div class="row align-items-center mb-4">
            <div class="col-lg-6">
              <div class="backTitle mb-3">
                <div class="pageTitleInner">
                  <h1 class="pageTitle text-capitalize m-0">
                    Subscription Management
                  </h1>
                </div>
              </div>
            </div>
            <div class="col-lg-6 text-end">
              <div class="d-flex align-items-baseline justify-content-end">
                <a href="./add-new.php" class="mainButton primaryButton">
                  Add
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Filters Starts Here --> */}
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
          {/* <!-- Filters Ends Here -->             */}

          <div class="row align-items-baseline mb-4">
            <div class="col-xl-8">
              <div class="postBox jobBox">
                <div class="mainPost">
                  <div class="poster">
                    <div class="posterDetails">
                      <h4 class="posterName">
                        Monthly Package{" "}
                        <span class="primaryColor d-block mt-2">$0.20</span>
                      </h4>
                    </div>

                    <button
                      type="button"
                      class="btn dropdown-toggle transparent-btn green"
                      data-bs-toggle="dropdown"
                    >
                      Active
                    </button>
                    <div class="dropdown-menu text-left customDropdown">
                      <button
                        class="dropdown-item red dropButton"
                        data-bs-toggle="modal"
                        data-bs-target="#inactiveUser"
                      >
                        <i class="fas fa-times me-2"></i>Inactive
                      </button>
                    </div>
                  </div>
                  <div class="row mt-2">
                    <div class="col-12">
                      <div class="jobContent">
                        <p>
                          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing
                          Elit. Aenean Euismod Bibendum Laoreet. Proin Gravida
                          Dolor Sit Amet Lacus Accumsan Et Viverra Justo
                          Commodo. Proin Sodales Pulvinar Tempor. Cum Sociis
                          Natoque Penatibus Et Magnis Dis Parturient Montes,
                          Nascetur Ridiculus Mus.
                        </p>
                        <a
                          href="./edit-subscription.php"
                          class="mainButton primaryButton"
                        >
                          Edit
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="postBox jobBox">
                <div class="mainPost">
                  <div class="poster">
                    <div class="posterDetails">
                      <h4 class="posterName">
                        Yearly Package{" "}
                        <span class="primaryColor d-block mt-2">$0.40</span>
                      </h4>
                    </div>

                    <button
                      type="button"
                      class="btn dropdown-toggle transparent-btn green"
                      data-bs-toggle="dropdown"
                    >
                      Active
                    </button>
                    <div class="dropdown-menu text-left customDropdown">
                      <button
                        class="dropdown-item red dropButton"
                        data-bs-toggle="modal"
                        data-bs-target="#inactiveUser"
                      >
                        <i class="fas fa-times me-2"></i>Inactive
                      </button>
                    </div>
                  </div>
                  <div class="row mt-2">
                    <div class="col-12">
                      <div class="jobContent">
                        <p>
                          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing
                          Elit. Aenean Euismod Bibendum Laoreet. Proin Gravida
                          Dolor Sit Amet Lacus Accumsan Et Viverra Justo
                          Commodo. Proin Sodales Pulvinar Tempor. Cum Sociis
                          Natoque Penatibus Et Magnis Dis Parturient Montes,
                          Nascetur Ridiculus Mus.
                        </p>
                        <a
                          href="./edit-subscription.php"
                          class="mainButton primaryButton"
                        >
                          Edit
                        </a>
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
  );
};
export default Index;
