import axios from "axios";
export const addAnnoucement = (data) => {
  return axios.post("/notification/createAlertOrAnnoucement", data);
};

export const getAllAlertsAndNotifications = (
  page,
  perPage,
  search_string,
  status,
  from,
  to,
  selected
) => {
  return axios.get(`/notification/getAllAlertsAndNotifications`, {
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

export const getNotificationDetails = (id) => {
  return axios.get(`/notification/notificationDetail/${id}`);
};
