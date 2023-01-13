import React from "react";

const ResetPassword = () => {
  return (
    <div>
      <section className="authHeader d-lg-block d-none">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="authLogo">
                <a href="./">
                  <img src="./../../assets/images/logo.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="authWrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 ">
              <div className="formMainWrap">
                <div className="formWrap flex-grow-1">
                  <form action="index.php">
                    <div className="authFormHeader text-center text-lg-start">
                      <div className="authLogo d-block d-lg-none mb-2">
                        <a href="./">
                          <img src="./../../assets/images/logo.png" alt="" />
                        </a>
                      </div>
                      <h2 className="authFormHeading">Password Recovery</h2>
                      <p>Enter your new Password.</p>
                    </div>
                    <div className="authFormBody">
                      <div className="authFormContent">
                        <div className="mainInputBox">
                          <label htmlFor className="mainLabel">
                            New Password*
                          </label>
                          <div className="passwordWrapper">
                            <input
                              type="password"
                              className="mainInput siteInput passInput"
                              placeholder="Enter New Password"
                              name
                              id
                            />
                            <button type="button" className="passDisplay">
                              <i
                                className="fas fa-eye-slash"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                        <div className="mainInputBox">
                          <label htmlFor className="mainLabel">
                            Confirm Password*
                          </label>
                          <div className="passwordWrapper">
                            <input
                              type="password"
                              className="mainInput siteInput passInput"
                              placeholder="Confirm New Password"
                              name
                              id
                            />
                            <button type="button" className="passDisplay">
                              <i
                                className="fas fa-eye-slash"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="authFormFooter text-center mt-4">
                        <button
                          type="submit"
                          className="mainButton primaryButton w-100 mb-3"
                        >
                          Continue
                        </button>
                        <a href="./index.php" className="forgetLink">
                          Back to Login
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6 g-0 d-lg-block d-none">
              <div className="loginScreenContentWrapper">
                <div className="loginScreenContent">
                  <h2 className="authHeading">Explore Your Services</h2>
                  <p className="text-white">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.Lorem Ipsum is simply dummy text of the
                    printing a
                  </p>
                </div>
                <img
                  src="./../../assets/images/loginProp1.png"
                  alt=""
                  className="loginProp loginProp1"
                />
                <img
                  src="./../../assets/images/loginProp2.png"
                  alt=""
                  className="loginProp loginProp2"
                />
                <img
                  src="./../../assets/images/loginProp3.png"
                  alt=""
                  className="loginProp loginProp3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResetPassword;
