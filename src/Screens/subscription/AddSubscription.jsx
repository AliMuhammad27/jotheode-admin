import React from "react";

const AddSubscription = () => {
  return (
    <div className="configuration">
      <div className="container-fluid">
        <div className="box">
          <div className="row align-items-center mb-4">
            <div className="col-12">
              <div className="backTitle mb-3">
                <button type="button" className="backLink me-1">
                  <i className="fas fa-arrow-left" />
                </button>
                <div className="pageTitleInner">
                  <h1 className="pageTitle text-capitalize m-0">
                    Create New subscription Package
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 col-lg-10">
              <form action="./index.php">
                <div className="row mb-3">
                  <div className="col-12">
                    <label htmlFor className="mainLabel mb-1">
                      Package Name
                    </label>
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="mainInput"
                      placeholder="Enter Package Name"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <label htmlFor className="mainLabel mb-1">
                      Package Price{" "}
                    </label>
                  </div>
                  <div className="col-12">
                    <input
                      type="url"
                      className="mainInput"
                      placeholder="Enter Package Price "
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <label htmlFor className="mainLabel mb-1">
                      Package details
                    </label>
                  </div>
                  <div className="col-12">
                    <textarea
                      name
                      id
                      rows={6}
                      className="mainInput"
                      placeholder="Enter Package details"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <button type="submit" className="mainButton primaryButton">
                      Post
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSubscription;
