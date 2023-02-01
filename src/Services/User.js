import axios from "axios";
export const getAllUsers = (
  page,
  perPage,
  search_string,
  role,
  status,
  from,
  to,
  selected
) => {
  return axios.get(`/users`, {
    params: {
      page,
      perPage,
      searchString: search_string,
      status,
      from,
      to,
      selected,
      role,
    },
  });
};
export const getUserDetails = (id) => {
  return axios.get(`/users/${id}`);
};
export const changeUserStatus = (id) => {
  return axios.get(`/users/toggleActiveInActive/${id}`);
};
