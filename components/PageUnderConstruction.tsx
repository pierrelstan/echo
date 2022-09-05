import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function PageUnderConstruction() {
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
        <Typography
          variant="h1"
          sx={{ fontWeight: "bold", fontSize: "52px" }}
          align="center"
        >
          Page under construction
        </Typography>
        <Image
          src={"/Image.svg"}
          width={400}
          height={400}
          alt="image under construction"
        />
      </Grid>
    </Container>
  );
}
