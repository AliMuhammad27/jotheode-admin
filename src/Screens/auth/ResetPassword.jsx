import React, { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { Link, useParams, useNavigate } from "react-router-dom";
import { resetPassword } from "../../Services/Auth";
import Button from "../../Components/Button";
import Error from "../../Components/Modals/Modal.Error";
import Success from "../../Components/Modals/Modal.Success";

const ResetPassword = () => {
  const [hidePass1, setHidePass1] = useState(true);
  const [hidePass2, setHidePass2] = useState(true);
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const { encoded } = useParams();
  useEffect(() => {
    if (encoded) {
      const decoded = window.atob(encoded);
      const _email = JSON.parse(decoded)?.email;
      const _code = JSON.parse(decoded)?.code;
      setEmail(_email);
      setCode(_code);
    }
  }, []);

  const { mutate: resetPasswordMuate, isLoading: resetLoading } = useMutation(
    (data) => resetPassword(data),
    {
      retry: false,
      onSuccess: (res) => {
        Success(res?.data?.message);

        setCode("");
        setPassword("");
        setConfirmPassword("");
        navigate("/auth/login");
      },
      onError: (err) => Error(err?.response?.data?.message),
    }
  );
  return (
    <div>
      <section className="authHeader d-lg-block d-none">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="authLogo">
                <a href="./">
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
                  <form action="index.php">
                    <div className="authFormHeader text-center text-lg-start">
                      <div className="authLogo d-block d-lg-none mb-2">
                        <a>
                          <img src="assets/images/logo.png" alt="" />
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
                              type={hidePass1 ? "password" : "text"}
                              className="mainInput siteInput passInput"
                              placeholder="Enter New Password"
                              name
                              id
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                              type="button"
                              class="passDisplay"
                              onClick={() =>
                                setHidePass1((prevValue) => !prevValue)
                              }
                            >
                              <i
                                className={
                                  hidePass1 ? "fas fa-eye-slash" : "fas fa-eye"
                                }
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
                              type={hidePass2 ? "password" : "text"}
                              className="mainInput siteInput passInput"
                              placeholder="Confirm New Password"
                              name
                              id
                              value={confirm_password}
                              onChange={(e) =>
                                setConfirmPassword(e.target.value)
                              }
                            />
                            <button
                              type="button"
                              class="passDisplay"
                              onClick={() =>
                                setHidePass2((prevValue) => !prevValue)
                              }
                            >
                              <i
                                className={
                                  hidePass2 ? "fas fa-eye-slash" : "fas fa-eye"
                                }
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="authFormFooter text-center mt-4">
                        <button
                          loading={resetLoading}
                          className="mainButton primaryButton w-100 mb-3"
                          onClick={() =>
                            resetPasswordMuate({
                              password,
                              confirm_password,
                              code,
                              email,
                            })
                          }
                        >
                          Continue
                        </button>
                        <Link to="/auth/login" className="forgetLink">
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

export default ResetPassword;
