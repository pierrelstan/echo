import { Box, Button, Typography, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function HeroSection() {
  const YEAR = new Date().getFullYear();
  return (
    <Grid
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: { sx: 0, md: 25 },
        flexWrap: { xs: "wrap", sm: "wrap", md: "nowrap", lg: "nowrap" },
      }}
      mt={3}
    >
      <Box
        sx={{
          mt: 4,
          display: { xs: "none", md: "block" },
        }}
      >
        <Image src={"/hero.webp"} width={600} height={550} alt="hero-logo" />
      </Box>
      <Box>
        <Typography
          variant="h1"
          sx={{
            fontWeight: "800",
            fontSize: { xs: "85px", sm: "74px", md: " 104px" },
          }}
        >
          New Arrivals {YEAR}
        </Typography>
        <Button
          variant="contained"
          sx={{
            fontSize: { xs: "20px", md: "25px" },
            mt: 2,
          }}
        >
          Buy Now
        </Button>
      </Box>
    </Grid>
  );
}
