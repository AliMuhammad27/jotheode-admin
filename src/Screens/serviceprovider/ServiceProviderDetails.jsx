import React from "react";

const ServiceProviderDetails = () => {
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
                    Service Provider Profile
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-end">
              <div className="d-flex align-items-baseline justify-content-end">
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
              </div>
            </div>
          </div>
          <div className="row align-items-baseline">
            <div className="col-lg-8 order-2 order-lg-1">
              <div className="row mb-lg-3 mb-3">
                <div className="col-12">
                  <div className="userImageFrame">
                    <img
                      src="./../../assets/images/userImage.jpg"
                      alt=""
                      className="userImage"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <label htmlFor className="mainLabel">
                    Name
                  </label>
                  <p className="mainText">Elsa Robert</p>
                </div>
                <div className="col-lg-6">
                  <label htmlFor className="mainLabel">
                    Email Address
                  </label>
                  <p className="mainText">elsa@sample.com</p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <label htmlFor className="mainLabel">
                    Phone Number
                  </label>
                  <p className="mainText">0000-000-0000000</p>
                </div>
                <div className="col-lg-6">
                  <label htmlFor className="mainLabel">
                    Location
                  </label>
                  <p className="mainText">Texas</p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <label htmlFor className="mainLabel">
                    Bio
                  </label>
                  <p className="mainText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean euismod bibendum laoreet. Proin gravida dolor sit
                    amet lacus accumsan et viverra justo commodo.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <label htmlFor className="mainLabel">
                    Profession
                  </label>
                  <p className="mainText">Doctor</p>
                </div>
                <div className="col-lg-6">
                  <label htmlFor className="mainLabel">
                    Subscription Type{" "}
                  </label>
                  <p className="mainText">Paid</p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <label htmlFor className="mainLabel">
                    Free Services:{" "}
                  </label>
                  <p className="mainText">
                    Primary Care <br />
                    Consultation
                  </p>
                </div>
                <div className="col-lg-6">
                  <label htmlFor className="mainLabel">
                    Premium Services:{" "}
                  </label>
                  <p className="mainText">
                    Primary Care <br />
                    Consultation
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <label htmlFor className="mainLabel">
                    Experience
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <label htmlFor className="mainLabel">
                    Hospital/ Clinic Name
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <p className="mainText text-black">Full-time - 9 mos</p>
                </div>
              </div>
              <div className="experiencebox">
                <div className="row">
                  <div className="col-lg-6">
                    <label htmlFor className="mainLabel">
                      Designation
                    </label>
                    <p className="mainText">Full-time</p>
                    <p className="mainText">May 2022 - Present</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <label htmlFor className="mainLabel">
                      Designation
                    </label>
                    <p className="mainText">Full-time</p>
                    <p className="mainText">May 2022 - Present</p>
                    <p className="mainText">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.Lorem ipsum dolor sit amet, adipiscg elitLorem ipsum
                      dolor sit amet, consectetur adipiscing elitLorem ipsum
                      dolor sit amet,
                    </p>
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

export default ServiceProviderDetails;
