import axios from "axios";

export const getProfile = () => {
  return axios.get(`/auth/`);
};

export const updateProfile = (data) => {
  return axios.post(`/users/admin/edit`, data);
};

export const changePassword = (data) => {
  return axios.post(`/auth/changepassword`, data);
};
