import React from "react";
import { Link } from "react-router-dom";
const ForgetPassword = () => {
  return (
    <div>
      <section className="authHeader d-lg-block d-none">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="authLogo">
                <a>
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
                  <form action="../dashboard/index.php">
                    <div className="authFormHeader text-center text-lg-start">
                      <div className="authLogo d-block d-lg-none mb-2">
                        <a href="./">
                          <img src="./../../assets/images/logo.png" alt="" />
                        </a>
                      </div>
                      <h2 className="authFormHeading">Password Recovery</h2>
                      <p>
                        Enter your email address to recieve a verification code.
                      </p>
                    </div>
                    <div className="authFormBody">
                      <div className="authFormContent">
                        <div className="mainInputBox">
                          <label className="mainLabel" htmlFor="email">
                            Email Address*
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="mainInput siteInput"
                            placeholder="Enter Email Address"
                          />
                        </div>
                      </div>
                      <div className="authFormFooter text-center mt-4">
                        <a
                          href="./password-recovery-2.php"
                          className="mainButton primaryButton w-100 mb-3"
                        >
                          Continue
                        </a>
                        <Link to="/" className="forgetLink">
                          Back to Login
                        </Link>
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

export default ForgetPassword;
