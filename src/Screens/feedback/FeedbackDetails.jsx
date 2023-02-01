import React from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getFeedbackDetails } from "../../Services/Feedback";
import { format_date } from "../../Util/helpers";
const FeedbackDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, refetch } = useQuery(["feedback_details", id], () =>
    getFeedbackDetails(id)
  );
  console.log("feedback_details_data", data);
  return (
    <div className="configuration">
      <div className="container-fluid">
        <div className="box mb-3">
          <div className="row align-items-center mb-4">
            <div className="col-lg-6">
              <div className="backTitle">
                <button type="button" className="backLink me-1">
                  <i
                    className="fas fa-arrow-left"
                    onClick={() => navigate(-1)}
                  />
                </button>
                <div className="pageTitleInner">
                  <h1 className="pageTitle text-capitalize m-0">
                    Feedback Management
                  </h1>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-6 text-end">
              <div className="d-flex align-items-baseline justify-content-end">
                <button
                  type="button"
                  className="btn dropdown-toggle transparent-btn green"
                  data-bs-toggle="dropdown"
                >
                  Active
                </button>
                <div className="dropdown-menu text-left customDropdown">
                  <button
                    className="dropdown-item red dropButton"
                    data-bs-toggle="modal"
                    data-bs-target="#inactiveUser"
                  >
                    <i className="fas fa-times me-2" />
                    Inactive
                  </button>
                </div>
              </div>
            </div> */}
          </div>
          <div className="row align-items-baseline">
            <div className="col-lg-8 order-2 order-lg-1">
              <div className="row">
                <div className="col-lg-6">
                  <label htmlFor className="mainLabel">
                    Name
                  </label>
                  <p className="mainText">
                    {data?.data?.firstname} {data?.data?.lastname}
                  </p>
                </div>
                <div className="col-lg-6">
                  <label htmlFor className="mainLabel">
                    Email Address
                  </label>
                  <p className="mainText">{data?.data?.email}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <label htmlFor className="mainLabel">
                    Phone Number
                  </label>
                  <p className="mainText">0000-000-0000000</p>
                </div>
                <div className="col-lg-6">
                  <label htmlFor className="mainLabel">
                    Subject
                  </label>
                  <p className="mainText">{data?.data?.subject}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <label htmlFor className="mainLabel">
                    Message
                  </label>
                  <p className="mainText">{data?.data?.message}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackDetails;
