import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Success from "../../Components/Modals/Modal.Success";
import { changePasswordSchema } from "../../Schema/profileSchema";
import Error from "../../Components/Modals/Modal.Error";
import { useMutation } from "react-query";
import { changePassword } from "../../Services/Profile";
import { setAccessToken } from "../../Util/authHeader";
import Button from "../../Components/Button";
const ChangePassword = () => {
  const navigate = useNavigate();
  const [hidePass1, setHidePass1] = useState(true);
  const [hidePass2, setHidePass2] = useState(true);
  const [hidePass3, setHidePass3] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(changePasswordSchema),
  });

  const { mutate, isLoading } = useMutation((data) => changePassword(data), {
    retry: false,
    onSuccess: (res) => {
      navigate("/dashboard", { replace: true });
      Success("Password Updated Successfully!");
    },
    onError: (err) => {
      console.log("changePassword err", err);
      Error(err?.response?.data?.message);
    },
  });
  const submit = (data) => {
    console.log(data, "data");
    console.log("Testing", {
      currentpassword: data?.currentpassword,
      newpassword: data?.newpassword,
      confirmpassword: data?.confirmpassword,
    });
    mutate({
      currentpassword: data?.currentpassword,
      newpassword: data?.newpassword,
      confirmpassword: data?.confirmpassword,
    });
  };
  console.log("errors", errors);
  return (
    <div class="configuration">
      <div class="container-fluid">
        <div class="box my-4">
          <div class="row align-items-center mb-4">
            <div class="col-12">
              <div class="backTitle mb-3">
                <button
                  type="button"
                  class="backLink me-1"
                  onClick={() => navigate(-1)}
                >
                  <i class="fas fa-arrow-left"></i>
                </button>
                <div class="pageTitleInner">
                  <h1 class="pageTitle text-capitalize m-0">Change Password</h1>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(submit)}>
            <div class="row mb-3">
              <div class="col-lg-6">
                <div class="row mb-2">
                  <div class="col-12">
                    <label for="" class="mainLabel">
                      Current Password<span class="text-danger">*</span>:
                      {errors?.currentpassword?.message && (
                        <span className="text-danger">*</span>
                      )}
                    </label>
                  </div>
                  <div class="col-12">
                    <div class="passwordWrapper">
                      <input
                        class="mainInput passInput"
                        placeholder="Enter Current Password"
                        type={hidePass1 ? "password" : "text"}
                        {...register("currentpassword")}
                      />
                      <span className="text-danger">
                        {errors?.currentpassword?.message}
                      </span>
                      <button
                        type="button"
                        class="passDisplay"
                        onClick={() => setHidePass1((prevValue) => !prevValue)}
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
                </div>
                <div class="row mb-2">
                  <div class="col-12">
                    <label for="" class="mainLabel">
                      New Password<span class="text-danger">*</span>:
                      {errors?.newpassword?.message && (
                        <span className="text-danger">*</span>
                      )}
                    </label>
                  </div>
                  <div class="col-12">
                    <div class="passwordWrapper">
                      <input
                        class="mainInput passInput"
                        placeholder="Enter New Password"
                        type={hidePass2 ? "password" : "text"}
                        {...register("newpassword")}
                      />
                      <span className="text-danger">
                        {errors?.newpassword?.message}
                      </span>
                      <button
                        type="button"
                        class="passDisplay"
                        onClick={() => setHidePass2((prevValue) => !prevValue)}
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
                <div class="row">
                  <div class="col-12">
                    <label for="" class="mainLabel">
                      Confirm Password<span class="text-danger">*</span>:
                      {errors?.confirmpassword?.message && (
                        <span className="text-danger">*</span>
                      )}
                    </label>
                  </div>
                  <div class="col-12">
                    <div class="passwordWrapper">
                      <input
                        class="mainInput passInput"
                        placeholder="Confirm Password"
                        type={hidePass3 ? "password" : "text"}
                        {...register("confirmpassword")}
                      />
                      <span className="text-danger">
                        {errors?.confirmpassword?.message}
                      </span>
                      <button
                        type="button"
                        class="passDisplay"
                        onClick={() => setHidePass3((prevValue) => !prevValue)}
                      >
                        <i
                          className={
                            hidePass3 ? "fas fa-eye-slash" : "fas fa-eye"
                          }
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-12">
                <Button
                  type="submit"
                  className="mainButton primaryButton mt-3"
                  data-bs-toggle="modal"
                  data-bs-target="#passChanged"
                  loading={isLoading}
                >
                  Update
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
