import React, { useState } from "react";
import TablePagination from "./TablePagination";
import InputDatePicker from "../../Form/InputDatePicker";
import Input from "../../Form/Input";
import Loading from "../Icons/Loading";
import Search from "../Icons/Search";
import { useDebouncedEffect } from "../../../Hooks/useDebouncedEffect";
export default function TableFilters({
  setSearchString,
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
  priceFilter,
  priceFrom,
  setPriceFrom,
  // priceFromOptions,
  priceTo,
  setPriceTo,
  // priceToOptions,
  durationFilter,
  setDurationFilter,
  durationFilterOptions,
  planFilter,
  setPlanFilter,
  planFilterOptions,
}) {
  const [internal_search, setInternalSearch] = useState("");
  useDebouncedEffect(
    () => setSearchString && setSearchString(internal_search),
    [internal_search],
    500
  );
  return (
    <>
      {/* Filters Start*/}
      <div className="user-listing-top dashCard py-2 px-2">
        <div className="d-xl-flex align-items-end justify-content-between flex-wrap mb-xl-1">
          <div>
            {setFrom && setTo && (
              <div className="userInput mb-2">
                <div className="d-flex align-items-center flex-wrap">
                  <label htmlFor className=" mb-1 mb-xl-0 me-2">
                    Sort By:
                  </label>
                  <div className="d-flex flex-wrap w_custom_100">
                    <div className="mb-1 mb-xl-0 me-2 w_custom_100">
                      <label htmlFor>From</label>
                      <InputDatePicker
                        onChange={setFrom}
                        value={from}
                        maxDate={to}
                      />
                    </div>
                    <div className="mb-1 mb-xl-0 w_custom_100">
                      <label htmlFor>To</label>
                      <InputDatePicker
                        onChange={setTo}
                        value={to}
                        minDate={from}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="d-flex align-items-baseline gap-2">
            {priceFilter && (
              <div className="user-input mb-2">
                <div className="d-flex align-items-center">
                  <label className="cGray d-inline-block mb-1 mb-xl-0 me-2 flex-shrink-0">
                    Sort by Price:
                  </label>
                  <Input
                    value={priceFrom}
                    className="cGray d-inline-block select-filter selectFilter2 me-2"
                    onChange={(minPrice) => setPriceFrom(minPrice)}
                    placeholder="Min"
                  />
                  <Input
                    value={priceTo}
                    className="cGray d-inline-block select-filter selectFilter2 me-2"
                    onChange={(maxPrice) => setPriceTo(maxPrice)}
                    placeholder="Max"
                  />
                  {/* <select
                    className="cGray d-inline-block select-filter selectFilter2 me-2"
                    value={priceFrom}
                    onChange={(e) => setPriceFrom(e.target.value)}
                  >
                    {priceFromOptions?.map((item) => (
                      <option value={item.value}>{item.label}</option>
                    ))}
                  </select>
                  <select
                    className="cGray d-inline-block select-filter selectFilter2 me-2"
                    value={priceTo}
                    onChange={(e) => setPriceTo(e.target.value)}
                  >
                    {priceToOptions?.map((item) => (
                      <option value={item.value}>{item.label}</option>
                    ))}
                  </select> */}
                </div>
              </div>
            )}
            {/* {durationFilter && ( */}
            {durationFilterOptions?.length > 0 && (
              <div className="user-input mb-2">
                <div className="d-flex align-items-center">
                  <label className="cGray d-inline-block mb-1 mb-xl-0 me-2 flex-shrink-0">
                    Filter By Duration:
                  </label>
                  <select
                    className="cGray d-inline-block select-filter selectFilter2 me-2"
                    value={durationFilter}
                    onChange={(e) => setDurationFilter(e.target.value)}
                  >
                    <option value="">All</option>
                    {durationFilterOptions?.map((item) => (
                      <option value={item?.toLowerCase()}>{item}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}
            {status_options?.length > 0 && (
              <div className="user-input mb-2">
                <div className="d-flex align-items-center">
                  <label className="cGray d-inline-block mb-1 mb-xl-0 me-2">
                    {status_label}:
                  </label>
                  <select
                    className="cGray d-inline-block select-filter selectFilter2 me-2"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="">All</option>
                    {status_options?.map((status) => (
                      <option value={status?.value}>{status?.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="d-xl-flex align-items-end flex-wrap justify-content-between mb-xl-1">
          <div className="d-lg-flex justify-content-lg-between">
            <TablePagination perPage={perPage} setPerPage={setPerPage} />
            <div className="d-flex align-items-center mb-2"></div>
          </div>
          <div className="d-flex align-items-baseline flex-wrap gap-2">
            {/* {planFilter && ( */}
            {planFilterOptions?.length > 0 && (
              <div className="user-input mb-2">
                <div className="d-flex align-items-center">
                  <label className="cGray d-inline-block mb-1 mb-xl-0 me-2 flex-shrink-0">
                    Filter By Plan:
                  </label>
                  <select
                    className="cGray d-inline-block select-filter selectFilter2 me-2"
                    value={planFilter}
                    onChange={(e) => setPlanFilter(e.target.value)}
                  >
                    <option value="">All</option>
                    {planFilterOptions?.map((item) => (
                      <option value={item?._id}>{item?.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}
            {setSearchString && (
              <div className="dashSearchWrap w_custom_100 dataTables_filter userInput">
                {/* <input
                      type="search"
                      id="search-inp"
                      className="select-filter search-input w-100"
                      placeholder="Search"
                    />
                    <button className="notBtn searchIcon">
                      <i className="fas fa-search " />
                    </button> */}
                <Input
                  value={internal_search}
                  className="select-filter search-input w-100"
                  onChange={(internal_search) =>
                    setInternalSearch(internal_search)
                  }
                  placeholder="Search"
                  endIcon={
                    isFetching ? (
                      <Loading
                        style={{
                          // marginTop: -27,
                          marginTop: -40,
                          position: "absolute",
                          right: 11,
                        }}
                      />
                    ) : (
                      <Search />
                      // <Search style={{ marginTop: -5 }} />
                    )
                  }
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Filters End */}
    </>
  );
}
