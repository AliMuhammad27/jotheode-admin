import * as yup from "yup";

export const changePasswordSchema = yup
  .object({
    currentpassword: yup.string().required("Current Password is required"),
    newpassword: yup.string().max(20).required("new password is required"),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("newpassword"), null], "Passwords doesn't match"),
  })
  .required();

export const editProfileSchema = yup
  .object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
  })
  .required();

export const subscriptionSchema = yup
  .object({
    subscriptionname: yup.string().required("subscription name is required"),
    // price: yup.string().required("price is required"),
    // parkingSpace: yup.string().required("parking space is required"),
    description: yup.string().required("Description is required"),
    // subscriptionStatus: yup
    //   .boolean()
    //   .required()
    //   .oneOf([true, false], "status is required"),
  })
  .required();

export const categorySchema = yup
  .object({
    name: yup.string().required("category name is required"),
  })
  .required();

export const annoucementSchema = yup.object({
  notificationType: yup.string().required("notification type is required"),
  notificationTitle: yup.string().required("notification title is required"),
  description: yup.string().required("description is required"),
});
