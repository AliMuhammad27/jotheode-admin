import React from "react";
import useTableControls from "../../Hooks/useTableControls";
import useFetchData from "../../Hooks/useFetchData";
import { getAllCategories } from "../../Services/Category";
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
  } = useFetchData("Category_logs", getAllCategories, [
    perPage,
    search_string,
    status,
    from,
    to,
  ]);
  console.log("Category_logs", data);
  return (
    <div class="configuration">
      <div class="container-fluid">
        <div class="box">
          <div class="row align-items-center mb-4">
            <div
              className="d-flex align-items-baseline justify-content-end "
              style={{ marginBottom: "12px" }}
            >
              <Link to="/AddCategory" class="mainButton primaryButton">
                Add Category
              </Link>
            </div>
            <Table
              title="CATEGORY MANAGEMENT"
              headings={["S.No.", "Name", "Added On", "Action"]}
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
                    <td>{log?.name}</td>
                    <td>{format_date(log?.createdAt, "YYYY-MM-DD")}</td>
                    <td>
                      <TableMenu
                        details_link={`/feedbacks/feedbackDetails/${log?._id}`}
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
