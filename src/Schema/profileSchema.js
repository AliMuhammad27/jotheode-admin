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
    planName: yup.string().required("Plan name is required"),
    // price: yup.string().required("price is required"),
    // parkingSpace: yup.string().required("parking space is required"),
    description: yup.string().required("Description is required"),
    // subscriptionStatus: yup
    //   .boolean()
    //   .required()
    //   .oneOf([true, false], "status is required"),
  })
  .required();

export const carSchema = yup
  .object({
    carName: yup.string().required("car name is required"),
  })
  .required();

export const facilitySchema = yup
  .object({
    facilityName: yup.string().required("facility name is required"),
    // facilityStatus: yup.boolean().required('status is required').oneOf([true, false], "status is required")
  })
  .required();
