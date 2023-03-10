import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Success from "../../Components/Modals/Modal.Success";
import { subscriptionSchema } from "../../Schema/profileSchema";
import Button from "../../Components/Button";
import { useMutation } from "react-query";
import { addSubscriptionPlan } from "../../Services/Subscription";
import Error from "../../Components/Modals/Modal.Error";
const AddSubscription = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(subscriptionSchema),
  });
  const { mutate, isLoading } = useMutation(
    (data) => addSubscriptionPlan(data),
    {
      retry: false,
      onSuccess: (res) => {
        console.log("addSubscriptionPlan Res", res?.data);
        Success("Subscription Added", "Subscription Added Successfully!!");
        navigate("/subscriptions");
      },
      onError: (err) => {
        // console.log("addSubscriptionPlan err", err);
        Error(err?.response?.data?.message);
      },
    }
  );
  const submit = (data) => {
    // console.log(data, "data");
    const obj = {
      subscriptionname: data?.subscriptionname,
      description: data?.description,
      subscriptionprice: data?.subscriptionprice,
      subscriptiontype: data?.subscriptiontype,
      subscriptionduration: data?.subscriptionduration,
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
                    Create New subscription Package
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
                      Package Name
                      {errors?.subscriptionname?.message && (
                        <span className="text-danger">*</span>
                      )}
                    </label>
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="mainInput"
                      placeholder="Enter Package Name"
                      {...register("subscriptionname")}
                    />
                    <span className="text-danger">
                      {errors?.subscriptionname?.message}
                    </span>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <label htmlFor className="mainLabel mb-1">
                      Package Price{" "}
                    </label>
                  </div>
                  <div className="col-12">
                    <input
                      type="number"
                      className="mainInput"
                      placeholder="Enter Package Price "
                      {...register("subscriptionprice")}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-12">
                    <label htmlFor className="mainLabel mb-1">
                      Package Type{" "}
                    </label>
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="mainInput"
                      placeholder="Enter Package Type "
                      {...register("subscriptiontype")}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-12">
                    <label htmlFor className="mainLabel mb-1">
                      Package Duration{" "}
                    </label>
                  </div>
                  <div className="col-12">
                    <input
                      type="number"
                      className="mainInput"
                      placeholder="Enter Package Duration "
                      {...register("subscriptionduration")}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-12">
                    <label htmlFor className="mainLabel mb-1">
                      Package details
                    </label>
                  </div>
                  <div className="col-12">
                    <textarea
                      name
                      id
                      rows={6}
                      className="mainInput"
                      placeholder="Enter Package details"
                      defaultValue={""}
                      {...register("description")}
                    />
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

export default AddSubscription;
