import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { passwordSchema2 } from "../../Schema/authSchema";
import Error from "../../Components/Modals/Modal.Error";
import { useMutation } from "react-query";
import { recoverPassword, verifyCode } from "../../Services/Auth";
import { useState } from "react";
import Success from "../../Components/Modals/Modal.Success";
import Button from "../../Components/Button";
const VerifyCode = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [code, setCode] = useState("");
  const { encoded } = useParams();

  useEffect(() => {
    if (encoded) {
      const decoded = window.atob(encoded);
      const _email = JSON.parse(decoded)?.email;
      setEmail(_email);
    }
  }, []);

  const { mutate: verifyCodeMutate, isLoading: codeLoading } = useMutation(
    (data) => verifyCode(data),
    {
      retry: false,
      onSuccess: (res) => {
        Success(res?.data?.message);
        navigate(`/auth/password-recovery-3/${encoded}`);
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
                  <form action="../dashboard/index.php">
                    <div className="authFormHeader text-center text-lg-start">
                      <div className="authLogo d-block d-lg-none mb-2">
                        <a href="./">
                          <img src=".assets/images/logo.png" alt="" />
                        </a>
                      </div>
                      <h2 className="authFormHeading">Password Recovery</h2>
                      <p>Enter the verification code sent to your email.</p>
                    </div>
                    <div className="authFormBody">
                      <div className="authFormContent">
                        <div className="mainInputBox">
                          <label className="mainLabel" htmlFor="code">
                            Verification Code*
                          </label>
                          <input
                            type="number"
                            id="code"
                            className="mainInput siteInput"
                            value={code}
                            onChange={(email) => setCode(email.target.value)}
                            placeholder="Enter Verification Code"
                          />
                        </div>
                      </div>
                      <div className="authFormFooter text-center mt-4">
                        <Button
                          className="mainButton primaryButton w-100 mb-3"
                          loading={codeLoading}
                          onClick={() => verifyCodeMutate({ code, email })}
                        >
                          Continue
                        </Button>
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

export default VerifyCode;
