import { Box, Button, Typography, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import HeroCarousel from "./HeroCarousel";

export default function HeroSection() {
  const YEAR = new Date().getFullYear();
  return (
    <Grid
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: { sx: 0, md: 2 },
        flexWrap: { xs: "wrap", sm: "wrap", md: "nowrap" },
      }}
      mt={3}
    >
      <HeroCarousel />
      <Image src={"/hero2.png"} width={600} height={550} alt="hero-logo" />
    </Grid>
  );
}
