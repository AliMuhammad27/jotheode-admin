import moment from "moment/moment";
import { connection_string, image_url } from "./connection_strings";
import { toast } from "react-toastify";
export const asset = (filePath = null) => {
  return `${image_url}${filePath}`;
};

// Time in ms after react query will refetch the data
export const query_stale_time = 30000;

export const format_date = (date, format = "LL") => moment(date).format(format);

export const format_time = (time, format = "hh:mm A") =>
  moment(time, "HH:mm:ss").format(format);

export const notification = (message, type = "success") => {
  toast[type](message, {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 0,
  });
};

export const buildFormData = (formData, data, parentKey) => {
  if (
    data &&
    typeof data === "object" &&
    !(data instanceof Date) &&
    !(data instanceof File)
  ) {
    Object.keys(data).forEach((key) => {
      buildFormData(
        formData,
        data[key],
        parentKey ? `${parentKey}[${key}]` : key
      );
    });
  } else {
    const value = data == null ? "" : data;

    formData.append(parentKey, value);
  }
};

export const createDateAsUTC = (date) => {
  return new Date(
    Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds()
    )
  );
};

export const getSerialNumber = (data, index) => {
  if (data?.data?.data?.page >= 2 && index == 9) {
    return `${data?.data?.data?.prevPage + 1}0`;
  } else if (data?.data?.data?.page >= 2) {
    return `${data?.data?.data?.prevPage}${index + 1}`;
  }
  return index + 1;
};

export const DownloadCsv = (endpoint) => {
  return `${connection_string + endpoint}`;
};

export function capitalizeFirstLetter(string) {
  return string?.[0]?.toUpperCase() + string?.slice(1);
}

export const formatTimeString = (string) => {
  string = string?.split(":");
  return `${string?.[0]} ${string?.[2]?.toUpperCase()}`;
};

export const parkingTimeFormat = (string) => {
  string = string?.split(":");
  return `${string?.[0]}:${string?.[1]} ${string?.[2]?.toUpperCase()}`;
};
