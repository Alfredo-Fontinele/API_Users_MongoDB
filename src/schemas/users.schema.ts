import * as yup from "yup";

export const createUserSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
});

export const updateUserSchema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email(),
    password: yup.string(),
});
