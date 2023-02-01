import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import {
  getSubscriptionDetails,
  updateSubscriptionPlan,
  removeSubscriptionPlan,
} from "../../Services/Subscription";
import { query_stale_time } from "../../Util/helpers";
import Success from "../../Components/Modals/Modal.Success";
import Error from "../../Components/Modals/Modal.Success";
import Confirmation from "../../Components/Modals/Confirmation";
import Button from "../../Components/Button";

const EditSubscription = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, refetch } = useQuery(
    ["Subscription_details", id],
    () => getSubscriptionDetails(id),
    {
      staleTime: query_stale_time,
      retry: false,
    }
  );

  const { mutate, isSLoading } = useMutation(
    (data) => updateSubscriptionPlan(id, data),
    {
      retry: false,
      onSuccess: (res) => {
        // console.log("updateSubscriptionPlan Res", res?.data);

        //Fetching Facility Details

        Success("Subscription Updated", "Subscription Updated Successfully!");
        navigate("/subscription");
      },
      onError: (err) => {
        // console.log("updateSubscriptionPlan err", err);
        Error(err?.response?.data?.message);
      },
    }
  );

  const { mutate: Delmutate, isLoading: loadingStatus } = useMutation(
    (id) => removeSubscriptionPlan(id),
    {
      onSuccess: (res) => {
        console.log("DelRes", res?.data);
        Success("Subscription Deleted Successfully!");
        navigate("/subscriptions");
      },
      onError: (err) => Error(err?.response?.data?.msg),
    }
  );

  async function handleDelete() {
    try {
      await Delmutate(id);
      console.log("Subscription deleted!");
    } catch (error) {
      console.log(error);
    }
  }

  const [subscriptionName, setSubscriptionName] = useState("");
  const [subscriptionPrice, setSubscriptionPrice] = useState("");
  const [description, setDescription] = useState("");
  console.log("Subscription_details_data", data?.data);

  useEffect(() => {
    if (data?.data) {
      setSubscriptionName(data?.data?.subscriptionname);
      setSubscriptionPrice(data?.data?.subscriptionprice);
      setDescription(data?.data?.description);
    }
  }, [data?.data]);

  console.log("Subscription Name", subscriptionName);

  return (
    <div class="configuration">
      <div class="container-fluid">
        <div class="box">
          <div class="row align-items-center mb-4">
            <div class="col-12">
              <div class="backTitle mb-3">
                <button type="button" class="backLink me-1">
                  <i class="fas fa-arrow-left" onClick={() => navigate(-1)}></i>
                </button>
                <div class="pageTitleInner">
                  <h1 class="pageTitle text-capitalize m-0">
                    Edit New subscription Package
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-8 col-lg-10">
              <form action="#">
                <div class="row mb-3">
                  <div class="col-12">
                    <label for="" class="mainLabel mb-1">
                      Package Name<span class="text-danger">*</span>:
                    </label>
                  </div>
                  <div class="col-12">
                    <input
                      type="text"
                      class="mainInput"
                      placeholder="Enter Package Name"
                      value={subscriptionName}
                      onChange={(e) => setSubscriptionName(e.target.value)}
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-12">
                    <label for="" class="mainLabel mb-1">
                      Package Price{" "}
                    </label>
                  </div>
                  <div class="col-12">
                    <input
                      type="text"
                      class="mainInput"
                      placeholder="Enter Package Price"
                      value={subscriptionPrice}
                      onChange={(e) => setSubscriptionPrice(e.target.value)}
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-12">
                    <label for="" class="mainLabel mb-1">
                      Package details
                    </label>
                  </div>
                  <div class="col-12">
                    <textarea
                      name=""
                      id=""
                      rows="6"
                      class="mainInput"
                      placeholder="Enter Package details"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <Button
                      type="submit"
                      className="mainButton primaryButton"
                      data-bs-toggle="modal"
                      data-bs-target="#packageUpdated"
                    >
                      Update
                    </Button>
                    <Button
                      onClick={() => {
                        Confirmation(
                          `Are You Sure You Want To Delete this Subscription`,
                          "Yes",
                          () => Delmutate(id)
                        );
                      }}
                      className="mainButton primaryButton2"
                      data-bs-toggle="modal"
                      data-bs-target="#packageDeleted"
                    >
                      Delete
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

export default EditSubscription;
