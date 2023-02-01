import React from "react";
const AddService = () => {
  return (
    <div className="configuration">
      <div className="container-fluid">
        <div className="box mb-3">
          <div className="row align-items-center mb-4">
            <div className="col-lg-6">
              <div className="backTitle">
                <button type="button" className="backLink me-1">
                  <i className="fas fa-arrow-left" />
                </button>
                <div className="pageTitleInner">
                  <h1 className="pageTitle text-capitalize m-0">
                    Category Details
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-baseline">
            <div className="col-lg-8 order-2 order-lg-1">
              <div className="row mb-md-3 mb-0">
                <div className="col-lg-6">
                  <label htmlFor className="mainLabel">
                    Service Provider name
                  </label>
                  <input
                    type="text"
                    className="mainInput"
                    placeholder="Enter First Name"
                    defaultValue="Abc"
                  />
                </div>
              </div>
              <div className="row mb-md-3 mb-0">
                <div className="col-lg-6">
                  <label htmlFor className="mainLabel">
                    Service Type*
                  </label>
                  <div className="customer_records">
                    <input
                      type="text"
                      className="mainInput"
                      placeholder="Enter First Name"
                      defaultValue="Car Care"
                    />
                    <a
                      href="#"
                      className="d-block mt-3 text-lg-end text-primary extra-fields-customer"
                    >
                      Add Service <i className="fas fa-plus-circle" />
                    </a>
                  </div>
                  <div className="customer_records_dynamic" />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <a
                    href="#"
                    className="mainButton primaryButton"
                    data-bs-toggle="modal"
                    data-bs-target="#categoryAdded"
                  >
                    Add
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
