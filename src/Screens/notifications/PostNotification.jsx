import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { addAnnoucement } from "../../Services/Annoucement";
import { annoucementSchema } from "../../Schema/profileSchema";
import Success from "../../Components/Modals/Modal.Success";
import Button from "../../Components/Button";
const PostNotification = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(annoucementSchema),
  });
  const { mutate, isLoading } = useMutation((data) => addAnnoucement(data), {
    retry: false,
    onSuccess: (res) => {
      console.log("addAnnoucement Res", res?.data);
      Success("Notification Posted", "Notification Posted Successfully!!");
      navigate("/notifications");
    },
    onError: (err) => {
      // console.log("addSubscriptionPlan err", err);
      Error(err?.response?.data?.message);
    },
  });
  const submit = (data) => {
    // console.log(data, "data");
    const obj = {
      notificationType: data?.notificationType,
      notificationTitle: data?.notificationTitle,
      description: data?.description,
    };
    console.log("final obj", obj);
    mutate(obj);
  };
  console.log(errors);
  return (
    <div className="configuration">
      <div className="container-fluid">
        <div className="box">
          <div className="row align-items-center mb-4">
            <div className="col-12">
              <div className="backTitle mb-3">
                <button type="button" className="backLink me-1">
                  <i
                    className="fas fa-arrow-left"
                    onClick={() => navigate(-1)}
                  />
                </button>
                <div className="pageTitleInner">
                  <h1 className="pageTitle text-capitalize m-0">
                    Post New Notifications{" "}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 col-lg-10">
              <form onSubmit={handleSubmit(submit)}>
                <div className="row mb-3">
                  <div className="col-12">
                    <label htmlFor className="mainLabel mb-1">
                      Notification Title
                      {errors?.notificationTitle?.message && (
                        <span className="text-danger">*</span>
                      )}
                    </label>
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="mainInput"
                      placeholder="Notification ABC"
                      {...register("notificationTitle")}
                    />
                    <span className="text-danger">
                      {errors?.notificationTitle?.message}
                    </span>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <label htmlFor className="mainLabel mb-1">
                      Notification Type{" "}
                      {errors?.notificationType?.message && (
                        <span className="text-danger">*</span>
                      )}
                    </label>
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="mainInput"
                      placeholder="Alert  Notification"
                      {...register("notificationType")}
                    />
                    <span className="text-danger">
                      {errors?.notificationType?.message}
                    </span>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <label htmlFor className="mainLabel mb-1">
                      Descriptive Text
                      {errors?.description?.message && (
                        <span className="text-danger">*</span>
                      )}
                    </label>
                  </div>
                  <div className="col-12">
                    <textarea
                      name
                      id
                      rows={6}
                      className="mainInput"
                      placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus "
                      {...register("description")}
                    />
                    <span className="text-danger">
                      {errors?.description?.message}
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <Button
                      type="submit"
                      className="mainButton primaryButton"
                      loading={isLoading}
                    >
                      Post
                    </Button>
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

export default PostNotification;
