import axios from "axios";

export const addCategory = (data) => {
  return axios.post("/category/create", data);
};

export const getCategoryDetails = (id) => {
  return axios.get(`/category/${id}`);
};

export const getAllCategories = (
  page,
  perPage,
  search_string,
  status,
  from,
  to,
  selected
) => {
  return axios.get(`/category/logs`, {
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
