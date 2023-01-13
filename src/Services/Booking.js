import axios from "axios";

export const getAllBookings = (
  page,
  perPage,
  search_string,
  status,
  from,
  to,
  selected,
  userId,
  vendorId
) => {
  // console.log({userId, vendorId});
  return axios.get(`/booking/all`, {
    params: {
      page,
      perPage,
      searchString: search_string,
      status,
      from,
      to,
      selected,
      user: userId,
      vendor: vendorId,
    },
  });
};

export const getBookingDetails = (id) => {
  return axios.get(`/booking/${id}`);
};
