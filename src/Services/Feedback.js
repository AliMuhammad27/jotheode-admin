import axios from "axios";

export const getAllFeedbacks = (
  page,
  perPage,
  search_string,
  status,
  from,
  to,
  selected
) => {
  return axios.get(`/api/contact/`, {
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

export const getFeedbackDetails = (id) => {
  return axios.get(`/api/contact/${id}`);
};
