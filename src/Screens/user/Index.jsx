import React from "react";
import useTableControls from "../../Hooks/useTableControls";
import useFetchData from "../../Hooks/useFetchData";
import { getAllUsers, changeUserStatus } from "../../Services/User";
import Table from "../../Components/Elements/Table/Table";
import TableMenu from "../../Components/Elements/Table/TableMenu";
import { Link } from "react-router-dom";
import { format_date, getSerialNumber } from "../../Util/helpers";
import { useMutation } from "react-query";
import Success from "../../Components/Modals/Modal.Success";
import Error from "../../Components/Modals/Modal.Error";
import Confirmation from "../../Components/Modals/Confirmation";
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
    role,
    setRole,
  } = useTableControls();
  console.log("TableControls", perPage, status, from, to, search_string, role);

  const {
    // INTERNAL EXPORTS
    setPage,
    // REACT QUERY EXPORTS
    isFetching,
    isLoading,
    data,
    refetch,
  } = useFetchData("user_logs", getAllUsers, [
    perPage,
    search_string,
    status,
    from,
    to,
    role,
  ]);
  console.log("user_logs", data);
  const { mutate, isLoading: loadingStatus } = useMutation(
    (id) => changeUserStatus(id),
    {
      onSuccess: (res) => {
        refetch();
        Success(res?.data?.msg);
      },
      onError: (err) => Error(err?.response?.data?.msg),
    }
  );

  return (
    <div className="configuration">
      <div className="container-fluid">
        <div className="box">
          <div className="row align-items-center mb-4">
            <div className="col-12">
              <h1 className="pageTitle text-capitalize m-0">
                Users Management
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Table
                headings={[
                  "S.No.",
                  "Name",
                  "Email Address",
                  "Register On",
                  "Status",
                  "Action",
                ]}
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
                role={role}
                setRole={setRole}
                // status={status}
                // setStatus={setStatus}
                // status_label="Status"
                // status_options={[
                //   {
                //     label: 'Active',
                //     value: true,
                //   },
                //   {
                //     label: 'Inactive',
                //     value: false,
                //   },
                // ]}
                statusLog={true}
              >
                <tbody>
                  {data?.data?.docs.map((log, index) => (
                    <tr class="tableRow">
                      <td>{getSerialNumber(data, index)}</td>
                      <td>{log?.firstname + " " + log?.lastname}</td>
                      <td>{log?.email || 0}</td>
                      <td>{format_date(log?.createdAt, "YYYY-MM-DD")}</td>
                      <td>
                        <TableMenu
                          actionFunciton={() => {
                            Confirmation(
                              `Are You Sure You Want To ${
                                log?.isActive ? "Active" : "Inactive"
                              } This User?`,
                              "Yes",
                              () => mutate(log?._id)
                            );
                          }}
                          loading={loadingStatus}
                          status={log?.isActive}
                          disable_view={true}
                          status_changed={true}
                        />
                      </td>
                      <td>
                        {log?.lastStatusUpdatedAt &&
                          format_date(log?.lastStatusUpdatedAt, "YYYY-MM-DD")}
                      </td>
                      <td>
                        <TableMenu
                          details_link={`/user/userDetails/${log?._id}`}
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
    </div>
  );
};

export default Index;
