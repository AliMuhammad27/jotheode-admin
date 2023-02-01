import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { addCategory } from "../../Services/Category";
import { categorySchema } from "../../Schema/profileSchema";
import Success from "../../Components/Modals/Modal.Success";
import Button from "../../Components/Button";
const AddCategory = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(categorySchema),
  });
  const { mutate, isLoading } = useMutation((data) => addCategory(data), {
    retry: false,
    onSuccess: (res) => {
      console.log("addCategory Res", res?.data);
      Success("Category Added", "Category Added Successfully!!");
      navigate("/cateogoryManagement");
    },
    onError: (err) => {
      // console.log("addSubscriptionPlan err", err);
      Error(err?.response?.data?.message);
    },
  });
  const submit = (data) => {
    // console.log(data, "data");
    const obj = {
      name: data?.name,
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
                    Create New Category
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
                      Category Name
                      {errors?.name?.message && (
                        <span className="text-danger">*</span>
                      )}
                    </label>
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="mainInput"
                      placeholder="Enter Category Name"
                      {...register("name")}
                    />
                    <span className="text-danger">{errors?.name?.message}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <Button
                      type="submit"
                      className="mainButton primaryButton"
                      loading={isLoading}
                    >
                      Add Category
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

export default AddCategory;
