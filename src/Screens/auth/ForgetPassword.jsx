import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Error from "../../Components/Modals/Modal.Error";
import Success from "../../Components/Modals/Modal.Success";
import { useMutation } from "react-query";
import { recoverPassword } from "../../Services/Auth";
import Button from "../../Components/Button";
const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState();
  const { mutate: recoverPasswordMuate, isLoading: recoverLoading } =
    useMutation((data) => recoverPassword(data), {
      retry: false,
      onSuccess: (res) => {
        Success(res?.data?.message);
        navigate(`/auth/password-recovery-2/${res?.data?.encodedEmail}`);
      },
      onError: (err) => Error(err?.response?.data?.message),
    });
  return (
    <div>
      <section className="authHeader d-lg-block d-none">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="authLogo">
                <a>
                  <img src="assets/images/logo.png" alt="" />
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
                  <form>
                    <div className="authFormHeader text-center text-lg-start">
                      <div className="authLogo d-block d-lg-none mb-2">
                        <a href="./">
                          <img src="assets/images/logo.png" alt="" />
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
                            value={email}
                            onChange={(email) => setEmail(email.target.value)}
                          />
                        </div>
                      </div>
                      <div className="authFormFooter text-center mt-4">
                        <Button
                          type="submit"
                          className="mainButton primaryButton w-100 mb-3"
                          loading={recoverLoading}
                          onClick={() => recoverPasswordMuate({ email })}
                        >
                          Continue
                        </Button>
                        <Link
                          to="/auth/login"
                          className="forgetLink"
                          onClick={() => localStorage.removeItem("email")}
                        >
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
                  src="assets/images/loginProp1.png"
                  alt=""
                  className="loginProp loginProp1"
                />
                <img
                  src="assets/images/loginProp2.png"
                  alt=""
                  className="loginProp loginProp2"
                />
                <img
                  src="assets/images/loginProp3.png"
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
