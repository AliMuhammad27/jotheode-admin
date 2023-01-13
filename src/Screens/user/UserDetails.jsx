import React from "react";

const UserDetails = () => {
  return (
    <div class="configuration">
      <div class="container-fluid">
        <div class="box mb-3">
          <div class="row align-items-center mb-4">
            <div class="col-lg-6">
              <div class="backTitle">
                <button type="button" class="backLink me-1">
                  <i class="fas fa-arrow-left"></i>
                </button>
                <div class="pageTitleInner">
                  <h1 class="pageTitle text-capitalize m-0">User Details</h1>
                </div>
              </div>
            </div>
            <div class="col-lg-6 text-end">
              <div class="d-flex align-items-baseline justify-content-end">
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
            </div>
          </div>

          <div class="row align-items-baseline">
            <div class="col-lg-8 order-2 order-lg-1">
              <div class="row mb-lg-3 mb-3">
                <div class="col-12">
                  <div class="userImageFrame">
                    <img
                      src="./../../assets/images/userImage.jpg"
                      alt=""
                      class="userImage"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <label for="" class="mainLabel">
                    Name
                  </label>
                </div>
                <div class="col-lg-6">
                  <p class="mainText">Abc</p>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <label for="" class="mainLabel">
                    Email
                  </label>
                </div>
                <div class="col-lg-6">
                  <p class="mainText">abc@email.com</p>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <label for="" class="mainLabel">
                    Contact
                  </label>
                </div>
                <div class="col-lg-6">
                  <p class="mainText">123123</p>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <label for="" class="mainLabel">
                    Location
                  </label>
                </div>
                <div class="col-lg-6">
                  <p class="mainText">Texas</p>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <label for="" class="mainLabel">
                    Bio
                  </label>
                </div>
                <div class="col-lg-6">
                  <p class="mainText">
                    You’ll find the About Page at the top of the menu under the
                    Who section.This page has a unique feel, thanks to the
                    deconstructed action figures representing the founders,
                    Leigh Whipday and Jonny Lander.The great attention to detail
                    and interactivity also reflect the company’s 16 years of
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
