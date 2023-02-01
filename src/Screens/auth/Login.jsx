import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../Schema/authSchema";
import { login } from "../../Services/Auth";
import { useMutation } from "react-query";
import { setAccessToken } from "../../Util/authHeader";
import Error from "../../Components/Modals/Modal.Error";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slice";
import Button from "../../Components/Form/Button";
import Success from "../../Components/Modals/Modal.Success";
const Login = () => {
  const [hidePass, setHidePass] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const { mutate, isLoading } = useMutation((data) => login(data), {
    retry: false,
    onSuccess: (res) => {
      console.log("login res", res.data);
      setAccessToken(res.data?.token);
      dispatch(setUser(res.data?.user));
      navigate("/dashboard");
      Success("Login Successfully");
    },
    onError: (err) => {
      console.log("err", err);
      Error(err?.response?.data?.message);
    },
  });
  const submit = (data) => {
    console.log(data, "data");
    mutate(data);
  };

  console.log(errors);
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
                  <form onSubmit={handleSubmit(submit)}>
                    <div className="authFormHeader text-center text-lg-start">
                      <div className="authLogo d-block d-lg-none mb-2">
                        <a>
                          <img src="assets/images/logo.png" alt="" />
                        </a>
                      </div>
                      <h2 className="authFormHeading">Sign In</h2>
                      <p>Enter Your Email Address to Sign In</p>
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
                            name="email"
                            {...register("email")}
                          />
                          <span className="text-danger">
                            {errors?.email?.message}
                          </span>
                        </div>
                        <div class="mainInputBox">
                          <label class="mainLabel">Password*</label>
                          <div class="passwordWrapper">
                            <input
                              type={hidePass ? "password" : "text"}
                              class="mainInput siteInput passInput"
                              placeholder="Enter Password"
                              name=""
                              id=""
                              {...register("password")}
                            />
                            <button
                              type="button"
                              className="not_btn passDisplay"
                              onClick={() =>
                                setHidePass((prevValue) => !prevValue)
                              }
                            >
                              <i
                                className={
                                  hidePass ? "fas fa-eye-slash" : "fas fa-eye"
                                }
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                        <span className="text-danger">
                          {errors?.password?.message}
                        </span>
                        <div className="d-sm-flex justify-content-between align-items-center">
                          <div className="mainInputBox w-100">
                            <input
                              type="checkbox"
                              id="remember-me"
                              name="remember-me"
                            />
                            <label htmlFor="remember-me">Remember Me</label>
                          </div>
                          <div className="mainInputBox w-100 text-end">
                            <Link
                              to="/auth/password-recovery-1"
                              className="forgot-link"
                            >
                              Forgot Password ?
                            </Link>
                          </div>
                        </div>
                      </div>
                      <Button
                        className="mainButton primaryButton w-100 mb-3"
                        type="submit"
                        loading={isLoading}
                      >
                        Sign In
                      </Button>
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

export default Login;
