import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { image_url } from "../Util/connection_strings";
import Confirmation from "../Components/Modals/Confirmation";
const Header = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.slice);
  console.log("User", user);
  const authLinks = (
    <>
      <aside className="sideNav ">
        <ul className="nav_wrapper main-menu">
          <li className="nav-item">
            <Link to="/dashboard" className="nav_links navLinks">
              <img src="assets/images/dside-icon/1.png" alt="" />
              <span className="menu-title">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/user" className="nav_links navLinks">
              <img src="assets/images/dside-icon/2.png" alt="" />
              <span>User Management</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/serviceprovider" className="nav_links navLinks">
              <img src="assets/images/dside-icon/3.png" alt="" />
              <span>Service Provider Management</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ServiceManagement" className="nav_links navLinks">
              <img src="assets/images/dside-icon/4.png" alt="" />
              <span>Service Type Management</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/feedbacks" className="nav_links navLinks">
              <img src="assets/images/dside-icon/5.png" alt="" />
              <span>Feedback Management</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cateogoryManagement" className="nav_links navLinks">
              <img src="assets/images/dside-icon/5.png" alt="" />
              <span>Category Management</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/subscriptions" className="nav_links navLinks">
              <img src="assets/images/dside-icon/6.png" alt="" />
              <span>Subscription Management</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Payment-logs" className="nav_links navLinks">
              <img src="assets/images/dside-icon/7.png" alt="" />
              <span>Payment Logs</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/notifications" className="nav_links navLinks">
              <img src="assets/images/dside-icon/8.png" alt="" />
              <span>Notifications</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/bookings" className="nav_links navLinks">
              <img src="assets/images/dside-icon/9.png" alt="" />
              <span>Booking &amp; Payment Details</span>
            </Link>
          </li>
        </ul>
      </aside>
      <div className="row">
        <div className="col-12">
          <div className="topBar">
            <div className="d-none smBlock">
              <button className="notButton toggleMobNav">
                <i className="fas fa-ellipsis-v hamburger" />
              </button>
            </div>
            <div className="LogoWrapper">
              <Link to="/dashboard">
                <img
                  src="assets/images/logo.png"
                  alt="Logo"
                  className="headerLogo"
                />
              </Link>
            </div>
            <ul className="sideMenu">
              <li className="md_none">
                <div className="dropdown">
                  <button
                    className="btn customDropDown"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="header_notif_icon">
                      <i className="far fa-bell" />
                      <span className="header_notif_count">05</span>
                    </span>
                  </button>
                  <div
                    className="dropdown-menu notifBox w_md_100"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <div className="notifBox_wrap">
                      <div className="notif_header">
                        <h6>Notifications</h6>
                        <div className="notf_count">
                          <h5>5 New</h5>
                        </div>
                      </div>
                      <div className="notif_body">
                        <a
                          href="./../notifications/notifications.php"
                          className="media d-flex gap-3"
                        >
                          <div className="media-left flex-shrink-0 align-self-top">
                            <i className="far fa-bell notificationIcon" />
                          </div>
                          <div className="media-body flex-grow-1">
                            <h6 className="notificationHeading">
                              Lorem Ipsum is simply dummy text
                            </h6>
                            <p className="notificationText">
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Id nam veniam aperiam eveniet
                              mollitia quos nemo! Officiis voluptates illo
                              delectus.
                            </p>
                            <small>
                              <time>30 minutes ago</time>
                            </small>
                          </div>
                        </a>
                        <a
                          href="./../notifications/notifications.php"
                          className="media d-flex gap-3"
                        >
                          <div className="media-left flex-shrink-0 align-self-top">
                            <i className="far fa-bell notificationIcon" />
                          </div>
                          <div className="media-body flex-grow-1">
                            <h6 className="notificationHeading">
                              Lorem Ipsum is simply dummy text
                            </h6>
                            <p className="notificationText">
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Id nam veniam aperiam eveniet
                              mollitia quos nemo! Officiis voluptates illo
                              delectus.
                            </p>
                            <small>
                              <time>55 minutes ago</time>
                            </small>
                          </div>
                        </a>
                        <a
                          href="./../notifications/notifications.php"
                          className="media d-flex gap-3"
                        >
                          <div className="media-left flex-shrink-0 align-self-top">
                            <i className="far fa-bell notificationIcon" />
                          </div>
                          <div className="media-body flex-grow-1">
                            <h6 className="notificationHeading">
                              Lorem Ipsum is simply dummy text
                            </h6>
                            <p className="notificationText">
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Id nam veniam aperiam eveniet
                              mollitia quos nemo! Officiis voluptates illo
                              delectus.
                            </p>
                            <small>
                              <time>2 hours ago</time>
                            </small>
                          </div>
                        </a>
                      </div>
                      <div className="notif_footer">
                        <a
                          href="../notifications/notifications.php"
                          className="primaryColor text-decoration-underline"
                        >
                          View All
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="md_none">
                <div className="dropdown option_dropDown">
                  <button
                    className="btn customDropDown  dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="userName d-inline-block">
                      <img
                        src={`${image_url}${user.image}`}
                        alt="avatar"
                        className="avatar"
                      />
                      <span>{user.fullname}</span>
                    </span>
                  </button>
                  <ul
                    className="dropdown-menu prfile_top_menu p-0"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        <i className="fas fa-user" />
                        My Profile
                      </Link>
                    </li>
                    {/* <li><a class="dropdown-item" href="./../discussion/"><i class="fas fa-comments"></i>My Discussion</a></li>
                          <li><a class="dropdown-item" href="./../payment/"><i class="fas fa-money-bill"></i>Payment Log</a></li>
                          <li><a class="dropdown-item" href="./../jobs/"><i class="fas fa-briefcase"></i>My Jobs</a></li> */}
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#logoutModal"
                        onClick={() =>
                          Confirmation(
                            "Are You Sure You Want To Logout?",
                            "Yes",
                            () => {
                              // removeAccessToken();
                              // setTimeout(() => window.location.reload(), 2000);
                              localStorage.clear();
                              navigate("/auth/login");
                            }
                            // () => mutate(log?._id)
                          )
                        }
                      >
                        <i className="fas fa-sign-out-alt" />
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="d-lg-none d-block">
                <button className="notButton toggleNavBtn">
                  <i className="fas fa-bars" />
                </button>
              </li>
            </ul>
          </div>
          {/*////////  shows only on mobile screens ////////*/}
          <ul className="mobileMenu d-none">
            <li>
              <div className="dropdown">
                <button
                  className="btn customDropDown"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="header_notif_icon">
                    <i className="far fa-bell" />
                    <span className="header_notif_count">05</span>
                  </span>
                </button>
                <div
                  className="dropdown-menu notifBox w_md_100"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <div className="notifBox_wrap">
                    <div className="notif_header">
                      <h6>Notifications</h6>
                      <div className="notf_count">
                        <h5>5 New</h5>
                      </div>
                    </div>
                    <div className="notif_body">
                      <a
                        href="./../notifications/notifications.php"
                        className="media d-flex gap-3"
                      >
                        <div className="media-left flex-shrink-0 align-self-top">
                          <i className="far fa-bell notificationIcon" />
                        </div>
                        <div className="media-body flex-grow-1">
                          <h6 className="notificationHeading">
                            Lorem Ipsum is simply dummy text
                          </h6>
                          <p className="notificationText">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Id nam veniam aperiam eveniet mollitia quos
                            nemo! Officiis voluptates illo delectus.
                          </p>
                          <small>
                            <time>2 hrs ago</time>
                          </small>
                        </div>
                      </a>
                      <a
                        href="./../notifications/notifications.php"
                        className="media d-flex gap-3"
                      >
                        <div className="media-left flex-shrink-0 align-self-top">
                          <i className="far fa-bell notificationIcon" />
                        </div>
                        <div className="media-body flex-grow-1">
                          <h6 className="notificationHeading">
                            Lorem Ipsum is simply dummy text
                          </h6>
                          <p className="notificationText">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Id nam veniam aperiam eveniet mollitia quos
                            nemo! Officiis voluptates illo delectus.
                          </p>
                          <small>
                            <time>2 hrs ago</time>
                          </small>
                        </div>
                      </a>
                      <a
                        href="./../notifications/notifications.php"
                        className="media d-flex gap-3"
                      >
                        <div className="media-left flex-shrink-0 align-self-top">
                          <i className="far fa-bell notificationIcon" />
                        </div>
                        <div className="media-body flex-grow-1">
                          <h6 className="notificationHeading">
                            Lorem Ipsum is simply dummy text
                          </h6>
                          <p className="notificationText">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Id nam veniam aperiam eveniet mollitia quos
                            nemo! Officiis voluptates illo delectus.
                          </p>
                          <small>
                            <time>2 hrs ago</time>
                          </small>
                        </div>
                      </a>
                    </div>
                    <div className="notif_footer">
                      <a
                        href="../notifications/notifications.php"
                        className="primColor text-decoration-underline"
                      >
                        View All
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="dropdown option_dropDown">
                <button
                  className="btn customDropDown  dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="userName d-inline-block">
                    <img
                      src="assets/images/avatar.png"
                      alt="avatar"
                      className="avatar"
                    />
                    <span>Marson Albert</span>
                  </span>
                </button>
                <ul
                  className="dropdown-menu prfile_top_menu p-0"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      href="./../profile/my-profile.php"
                    >
                      <i className="fas fa-eye" />
                      My Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="./../discussion/">
                      <i className="fas fa-comments" />
                      My Discussion
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="./../payment/">
                      <i className="fas fa-money-bill" />
                      Payment Log
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="./../jobs/">
                      <i className="fas fa-briefcase" />
                      My Jobs
                    </a>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={() =>
                        Confirmation(
                          "Are You Sure You Want To Logout?",
                          "Yes",
                          () => {
                            // removeAccessToken();
                            // setTimeout(() => window.location.reload(), 2000);
                            localStorage.clear();
                            navigate("/auth/login");
                          }
                          // () => mutate(log?._id)
                        )
                      }
                    >
                      <i className="fas fa-sign-out-alt" />
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* <div
        class="modal fade"
        id="logoutModal"
        data-bs-backdrop="static"
        aria-labelledby="exampleModalCenterTitle"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modalHeader">
              <button
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
                class="modalClose"
              >
                <i class="fas fa-times"></i>
              </button>
            </div>
            <div class="modalBody">
              <div class="modalImage">
                <img
                  src="assets/images/question.png"
                  alt=""
                  class="img-fluid"
                />
                <div id="question_mark"></div>
              </div>
              <h3 class="modalHeading">Logout</h3>
              <p class="modalText">Are You Sure You Want To Logout ?</p>
            </div>
            <div class="modalFooter">
              <button
                href="./../auth/"
                class="mainButton primaryButton mx-1"
                onClick={() => {
                  localStorage.clear();
                  navigate("/auth/login");
                }}
              >
                Yes
              </button>
              <button
                type="button"
                class="mainButton primaryButton2 mx-1"
                data-bs-dismiss="modal"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
  return <Fragment>{authLinks}</Fragment>;
};

export default Header;
