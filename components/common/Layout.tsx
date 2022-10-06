import { Container, Stack } from "@mui/material";
import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Navbar/Navbar";

export default function Layout({ children }: any) {
  return (
    <Container fixed>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          justifyContent: "space-between",
        }}
        spacing={5}
      >
        <Header />
        {children}
        <Footer />
      </Stack>
    </Container>
  );
}
