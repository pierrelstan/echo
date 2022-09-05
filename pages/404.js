import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

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
          src={"/stand.svg"}
          width={500}
          height={500}
          alt="Image Error 404"
        />
      </Grid>
    </Container>
  );
}
