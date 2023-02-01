import axios from "axios";

export const addSubscriptionPlan = (data) => {
  return axios.post(`/subscription/createSubscription`, data);
};

export const getSubscriptionPlanDetails = (id) => {
  return axios.get(`/packages/${id}`);
};

export const changeSubscriptionPlanStatus = (id) => {
  console.log("Id", id);
  return axios.get(`/subscription/toggleStatus/${id}`);
};

export const updateSubscriptionPlan = (id, data) => {
  return axios.post(`/subscription/editSubscription/${id}`, data);
};

export const removeSubscriptionPlan = (id) => {
  return axios.delete(`/subscription/deleteSubscription/${id}`);
};

export const getSubscriptionDetails = (id) => {
  return axios.get(`/subscription/getSubscriptionDetails/${id}`);
};

export const getAllSubscriptions = (
  page,
  perPage,
  search_string,
  status,
  from,
  to,
  selected
) => {
  return axios.get(`/subscription/logs`, {
    params: {
      page,
      perPage,
      searchString: search_string,
      status,
      from,
      to,
      selected,
    },
  });
};
