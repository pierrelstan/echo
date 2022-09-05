import { styled } from "@mui/material/styles";
import React from "react";

const Wrapper = styled("nav")(() => ({
  maxWidth: "100%",
}));

export default function Nav({ children }: any) {
  return <Wrapper>{children}</Wrapper>;
}
