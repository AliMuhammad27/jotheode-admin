import React from "react";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getProfile } from "../../Services/Profile";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/slice";
import { image_url } from "../../Util/connection_strings";
const Profile = () => {
  const { isLoading, data } = useQuery("getProfile", getProfile);
  const dispatch = useDispatch();
  useEffect(() => {
    if (data?.data) {
      console.log("Data", data?.data);
      dispatch(setUser(data?.data));
    }
  }, [data?.data]);
  return (
    <div className="configuration">
      <div className="container-fluid">
        <div className="box my-4">
          <div className="row align-items-center mb-4">
            <div className="col-12">
              <div className="backTitle mb-3">
                <div className="pageTitleInner">
                  <h1 className="pageTitle text-capitalize m-0">My Profile</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-6">
              <div className="row mb-lg-5 mb-3">
                <div className="col-12">
                  <div className="userImageFrame">
                    <img
                      src={`${image_url}${data?.data?.image}`}
                      alt=""
                      className="userImage"
                    />
                  </div>
                  <Link
                    to="/changePassword"
                    className="primaryColor text-decoration-underline fw-bold"
                  >
                    Change Password
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <label htmlFor className="mainLabel">
                    Name
                  </label>
                  <p className="mainText">{data?.data?.fullname}</p>
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
                  <p className="mainText">
                    {data?.data?.phone_no
                      ? data?.data?.phone_no
                      : "0000-015640025-2123"}
                  </p>
                </div>
                <div className="col-lg-6">
                  <label htmlFor className="mainLabel">
                    Date of birth
                  </label>
                  <p className="mainText">20 April,2020</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <Link to="/editProfile" className="mainButton primaryButton mt-3">
                Edit Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
