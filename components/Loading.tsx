import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

export default function Loading() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <CircularProgress size={40} color={"primary"} />
      </Box>
    </Container>
  );
}
