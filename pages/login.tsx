import React from "react";
import { selectIsAuth } from "features/user/userSlice";
import { useRouter } from "next/dist/client/router";
import { useAppSelector } from "redux/hooks";
import LoginForm from "components/LoginForm";
import { Container } from "@mui/material";

export default function Login() {
  const isAuth = useAppSelector(selectIsAuth);
  const router = useRouter();

  React.useEffect(() => {
    if (!isAuth) return;
    router.push("/");
  }, [isAuth, router]);
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LoginForm />
    </Container>
  );
}
