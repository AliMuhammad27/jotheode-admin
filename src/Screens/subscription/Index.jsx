import React from "react";
import { Link } from "react-router-dom";
import useFetchData from "../../Hooks/useFetchData";
import { useMutation } from "react-query";
import Success from "../../Components/Modals/Modal.Success";
import {
  getAllSubscriptions,
  changeSubscriptionPlanStatus,
} from "../../Services/Subscription";
import useTableControls from "../../Hooks/useTableControls";

const Index = () => {
  const {
    perPage,
    setPerPage,
    status,
    setStatus,
    search_string,
    setSearchString,
    from,
    setFrom,
    to,
    setTo,
  } = useTableControls();
  console.log("TableControls", perPage, status, from, to, search_string);
  const {
    // INTERNAL EXPORTS
    setPage,
    // REACT QUERY EXPORTS
    isFetching,
    isLoading,
    data,
    refetch,
  } = useFetchData("subscription_logs", getAllSubscriptions, [
    perPage,
    search_string,
    from,
    to,
  ]);
  console.log("subscription_logs", data);

  const { mutate, isLoading: loadingStatus } = useMutation(
    (id) => changeSubscriptionPlanStatus(id),
    {
      onSuccess: (res) => {
        refetch();
        Success(res?.data?.msg);
      },
      onError: (err) => Error(err?.response?.data?.msg),
    }
  );

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
                <Link
                  to="/subscriptions/add-subscription"
                  class="mainButton primaryButton"
                >
                  Add
                </Link>
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
              {data?.data?.docs.map((item) => (
                <div class="postBox jobBox">
                  <div class="mainPost">
                    <div class="poster">
                      <div class="posterDetails">
                        <h4 class="posterName">
                          {item?.subscriptiontype}{" "}
                          <span class="primaryColor d-block mt-2">
                            ${item?.subscriptionprice}
                          </span>
                        </h4>
                      </div>
                      <button
                        type="button"
                        class={
                          item?.status
                            ? "btn dropdown-toggle transparent-btn green"
                            : "btn dropdown-toggle transparent-btn red"
                        }
                        data-bs-toggle="dropdown"
                      >
                        {item?.status ? <>Active</> : <>Inactive</>}
                      </button>
                      <div class="dropdown-menu text-left customDropdown">
                        <button
                          class={
                            item?.status
                              ? "dropdown-item red dropButton"
                              : "dropdown-item green dropButton"
                          }
                          onClick={() => {
                            mutate(item?._id);
                          }}
                        >
                          <i
                            class={
                              item?.status
                                ? "fas fa-times me-1"
                                : "fas fa-times me-1"
                            }
                          ></i>
                          {item?.status ? <>Inactive</> : <>Active</>}
                        </button>
                      </div>
                    </div>
                    <div class="row mt-2">
                      <div class="col-12">
                        <div class="jobContent">
                          <p>{item?.description}</p>
                          <Link
                            to={`/subscriptions/edit-subscription/${item?._id}`}
                            class="mainButton primaryButton"
                          >
                            Edit
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
