import axios from "axios";
export const login = (data) => {
  return axios.post(`/auth/admin/login`, data);
};
export const recoverPassword = (data) => {
  return axios.post(`/auth/forgot`, data);
};
export const verifyCode = (data) => {
  return axios.post(`/auth/verifycode`, data);
};
export const resetPassword = (data) => {
  return axios.post(`/auth/password/reset`, data);
};
