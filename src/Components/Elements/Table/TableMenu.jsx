import React, { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Icons/Loading";

export default function TableMenu({
  loading,
  actionFunciton,
  status,
  details_link,
  edit_link,
  enable_edit,
  disable_action,
  disable_view,
  status_changed = false,
}) {
  const [toggleStatus, setToggleStatus] = useState(false);

  if (loading) return <Loading disable_center />;

  return (
    // <div className="btn-group custom-dropdown ml-2 mb-1">
    <>
      {/* <div className={`${status ? "" : "btn-group"}`}> */}
      <div className={`${status_changed ? "" : "btn-group"}`}>
        {status_changed ? (
          <button
            type="button"
            className={`btn dropdown-toggle transparent-btn ${
              status ? "text-green" : "text-danger"
            } ${toggleStatus && "show"}`}
            data-toggle="dropdown"
            onClick={
              // !disable_action && status
              status || disable_action == true || status_changed
                ? () => setToggleStatus(!toggleStatus)
                : () => {}
            }
          >
            {status ? "Active" : "Inactive"}
          </button>
        ) : (
          <button
            type="button"
            className={`btn transparent-btn ellipsis-btn ${
              toggleStatus && "show"
            }`}
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            onClick={
              status || disable_action == true || !status_changed
                ? () => setToggleStatus(!toggleStatus)
                : () => {}
            }
          >
            {!status_changed && <i className="fa fa-ellipsis-v"></i>}
          </button>
        )}
        <div
          className={`dropdown-menu postDropdown ${toggleStatus && "show"} ${
            !status_changed && "dropdown_action"
          }`}
        >
          {!disable_view && (
            <Link
              to={details_link}
              className="dropdown-item d-flex align-items-center justify-content-start"
            >
              <i className="fas fa-eye"></i>
              View
            </Link>
          )}
          {enable_edit && (
            <Link
              to={edit_link}
              className="dropdown-item d-flex align-items-center justify-content-start"
            >
              <i class="fas fa-pencil-alt"></i>
              Edit
            </Link>
          )}
          {!disable_action && (
            <Link
              to="#"
              onClick={() => actionFunciton()}
              // className="dropdown-item d-flex align-items-center justify-content-start"
              className={
                status
                  ? "dropdown-item  red_color"
                  : "dropdown-item  green_color"
              }
            >
              {status ? (
                <>
                  <i className="far fa-times"></i>
                  Inactive
                </>
              ) : (
                <>
                  <i className="fas fa-check"></i>
                  Active
                </>
              )}
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
