import { Container, Stack } from "@mui/material";
import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Navbar/Navbar";

export default function Layout({ children }: any) {
  return (
    <Container fixed>
      <Stack direction="column" spacing={5}>
        <Header />
        {children}
        <Footer />
      </Stack>
    </Container>
  );
}
