import React from "react";
import Graph from "../../Components/Graph";
const Dashboard = () => {
  return (
    <div className="configuration">
      <div className="container-fluid">
        {/* Analytics Starts Here */}
        <div className="row">
          <div className="col-lg-6">
            <div className="boxDetails analytics1 d-flex align-items-center mb-2">
              <div className="analyticsIcon me-3">
                <i className="fas fa-code" />
              </div>
              <div className="d-flex w-100 justify-content-between align-items-center">
                <div className="map-wrap noWrap">
                  <h6 className="gray analyticsTextSmall m-0">Total Users</h6>
                  <h6 className="analyticsText">32,560</h6>
                </div>
                <div className="flex-shirink-0">
                  <img
                    src="assets/images/analytics1.png"
                    alt=""
                    className="analyticsImg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="boxDetails analytics2 d-flex align-items-center mb-2">
              <div className="analyticsIcon me-3">
                <i className="fas fa-chart-line" />
              </div>
              <div className="d-flex w-100 justify-content-between align-items-center">
                <div className="map-wrap noWrap">
                  <h6 className="gray analyticsTextSmall m-0">
                    Total Service Provider
                  </h6>
                  <h6 className="analyticsText">52,680</h6>
                </div>
                <div className="flex-shirink-0">
                  <img
                    src="assets/images/analytics2.png"
                    alt=""
                    className="analyticsImg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Analytics Ends here */}
        {/* Subscription Graphs Start Here */}
        <div className="row">
          <div className="col-12">
            <div className="box my-3">
              <div className="d-flex align-items-center justify-content-between flex-wrap">
                <h5 className="sectionTitle">User Subscription</h5>
                <div className="d-flex align-items-center">
                  <select name id className="mainInput">
                    <option value="m">Monthly</option>
                    <option value="ms">6 Months</option>
                    <option value="y">Yearly</option>
                  </select>
                </div>
              </div>
              <div className="graph">
                <Graph
                  label={"User Subscriptions"}
                  graph_data={[1, 2, 3, 4, 5, 6, 15, 10, 25, 30, 15, 20]}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Subscription Graphs End Here */}
        {/* Service Provider Subscriptions Graph Start Here */}
        <div className="row">
          <div className="col-12">
            <div className="box my-3">
              <div className="d-flex align-items-center justify-content-between flex-wrap">
                <h5 className="sectionTitle">Service Provider Subscriptions</h5>
                <div className="d-flex align-items-center">
                  <select name id className="mainInput">
                    <option value="m">Monthly</option>
                    <option value="ms">6 Months</option>
                    <option value="y">Yearly</option>
                  </select>
                </div>
              </div>
              <div className="graph">
                <Graph
                  label={"ServiceProvider Subscriptions"}
                  graph_data={[1, 2, 3, 4, 5, 6, 15, 10, 25, 30, 15, 20]}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Service Provider Subscriptions End Here */}
      </div>
    </div>
  );
};

export default Dashboard;
