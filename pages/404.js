import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
// import image from "../public/images/Chair.svg";

export default function Custom404() {
  return (
    <Container maxWidth="lg">
      <Grid
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h1" sx={{ fontWeight: "bold" }} align="center">
          Error 404
        </Typography>

        <Image
          src={"/chairsad.svg"}
          width={500}
          height={500}
          alt="Image Error 404"
        />
      </Grid>
    </Container>
  );
}
