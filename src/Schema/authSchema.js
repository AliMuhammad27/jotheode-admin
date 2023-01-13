import * as yup from "yup";

export const loginSchema = yup
    .object({
        email: yup
            .string()
            .email('Field should contain a valid e-mail')
            .max(255)
            .required('E-mail is required'),

        password: yup.string().required('Password is required'),
    })
    .required();


export const passwordSchema1 = yup
    .object({
        email: yup
            .string()
            .email('Field should contain a valid e-mail')
            .max(255)
            .required('E-mail is required'),
    })
    .required();

export const passwordSchema2 = yup
    .object({
        verificationCode: yup
            .string()
            .required('verification code is required'),
    })
    .required();

export const passwordSchema3 = yup
    .object({
        newPassword: yup
            .string()
            .max(20)
            .required('new password is required'),
        confirmPassword: yup.string().oneOf([yup.ref("newPassword"), null], "Passwords doesn't match")
    }).required()
