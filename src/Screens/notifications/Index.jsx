import React from "react";
import useTableControls from "../../Hooks/useTableControls";
import useFetchData from "../../Hooks/useFetchData";
import { getAllAlertsAndNotifications } from "../../Services/Annoucement";
import Table from "../../Components/Elements/Table/Table";
import TableMenu from "../../Components/Elements/Table/TableMenu";
import { Link } from "react-router-dom";
import { format_date, getSerialNumber } from "../../Util/helpers";

const Index = () => {
  const {
    perPage,
    setPerPage,
    status,
    setStatus,
    search_string,
    setSearchString,
    from,
    setFrom,
    to,
    setTo,
  } = useTableControls();
  console.log("TableControls", perPage, status, from, to, search_string);
  const {
    // INTERNAL EXPORTS
    setPage,
    // REACT QUERY EXPORTS
    isFetching,
    isLoading,
    data,
    refetch,
  } = useFetchData("noti_logs", getAllAlertsAndNotifications, [
    perPage,
    search_string,
    status,
    from,
    to,
  ]);
  console.log("noti_logs", data);
  return (
    <div className="configuration">
      <div className="container-fluid">
        <div className="box">
          <div className="row align-items-center mb-4">
            <div className="col-lg-6">
              <div className="backTitle mb-3">
                <div className="pageTitleInner">
                  <h1 className="pageTitle text-capitalize m-0">
                    Notifications
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-end">
              <div className="d-flex align-items-baseline justify-content-end">
                <Link
                  to="/notifications/post-notification"
                  className="mainButton primaryButton"
                >
                  Post New Notification
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <Table
              headings={["S.No.", "Title", "Type", , "Date Sheet", "Action"]}
              perPage={perPage}
              setPerPage={setPerPage}
              setSearchString={setSearchString}
              totalPages={data?.data?.totalPages}
              setPage={setPage}
              totalDocs={data?.data?.totalDocs}
              data={data?.data?.docs}
              isFetching={isFetching}
              isLoading={isLoading}
              from={from}
              setFrom={setFrom}
              to={to}
              setTo={setTo}
              statusLog={true}
              // dropDown={true}
              // dropDownText={"Export"}
            >
              <tbody>
                {data?.data?.docs?.map((log, index) => (
                  <tr class="tableRow">
                    <td>{getSerialNumber(data, index)}</td>
                    <td>{log?.title}</td>
                    <td>{log?.notificationType}</td>
                    <td>{format_date(log?.createdAt, "YYYY-MM-DD")}</td>
                    <td>
                      <TableMenu
                        details_link={`/notifications/notification-details/${log?._id}`}
                        loading={false}
                        disable_action={true}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
