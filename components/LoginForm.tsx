import React, { useState } from "react";

import { Form, Formik } from "formik";
import { useAppDispatch } from "redux/hooks";
import { Typography, Box, Stack, Button } from "@mui/material";

import { EmailField, PasswordField } from "@/components/Forms/Fields";

import * as yup from "yup";
import axios from "axios";
import routes from "@/utils/routes";
import SubmitButton, { SubmitStatus } from "./Forms/SubmitButton";
import { login } from "@/features/user/userSlice";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 50 characters length")
    .required("password is required"),
});

export interface LoginFormData {
  email: string;
  password: string;
}
const initialValues: LoginFormData = {
  email: "demouser@test.com",
  password: "123456789",
};

export default function LoginForm() {
  const [submitState, setSubmitState] = useState<SubmitStatus>("ready");

  const dispatch = useAppDispatch();

  const onSubmit = async (values: { email: string; password: string }) => {
    setSubmitState("submitting");
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_DATABASE_URL}` + routes.login,
        values
      );
      if (res.status === 200) {
        setSubmitState("done");
        const { data } = res;
        dispatch(login(data));
      }
    } catch (error) {
      setSubmitState("retry");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Stack
        component={Form}
        direction="column"
        alignItems="center"
        sx={{
          width: "100%",
        }}
      >
        <Typography variant="h5">Sign In</Typography>
        <EmailField />
        <PasswordField />
        <SubmitButton status={submitState} />
        <Box
          mt={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box mt={2}>
            <Button
              variant="outlined"
              href={"/create-a-new-account"}
              color="secondary"
            >
              Create a new account
            </Button>
          </Box>
          <Box>
            <Button>Forgot Password</Button>
          </Box>
        </Box>
      </Stack>
    </Formik>
  );
}
