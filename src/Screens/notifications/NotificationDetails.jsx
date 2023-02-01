import React from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getNotificationDetails } from "../../Services/Annoucement";
import { format_date } from "../../Util/helpers";
const NotificationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, refetch } = useQuery(
    ["notification_details", id],
    () => getNotificationDetails(id)
  );
  console.log("notification_details", data);
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
                    View Notification Details
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-baseline">
            <div className="col-lg-8 order-2 order-lg-1">
              <div className="row">
                <div className="col-lg-12">
                  <label htmlFor className="mainLabel">
                    Notification Title
                  </label>
                  <p className="mainText">{data?.data?.title}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <label htmlFor className="mainLabel">
                    Notification Type
                  </label>
                  <p className="mainText">{data?.data?.notificationType}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <label htmlFor className="mainLabel">
                    Sent On
                  </label>
                  <p className="mainText">
                    {format_date(data?.data?.createdAt)}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <label htmlFor className="mainLabel">
                    Descriptive Text
                  </label>
                  <p className="mainText">{data?.data?.body}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NotificationDetails;
