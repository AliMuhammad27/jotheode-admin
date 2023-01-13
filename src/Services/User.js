import axios from "axios";
export const getAllUsers = (
  page,
  perPage,
  search_string,
  status,
  from,
  to,
  selected
) => {
  return axios.get(`/users/all`, {
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

export const getUserDetails = (id) => {
  return axios.get(`/users/${id}`);
};

export const getUserStatusLogs = (
  page,
  perPage,
  id,
  search_string,
  status,
  from,
  to,
  selected
) => {
  return axios.get(`/users/status-logs/${id}`, {
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
export const changeUserStatus = (id, data) => {
  return axios.post(`/users/toggle/${id}`, data);
};
