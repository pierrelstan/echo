import { Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

export const StyledLink = styled(Link)(() => ({
  textDecoration: "none",
  margin: "5px 15px",
  flexGrow: 1,
  justifyContent: "center",
  alignItems: "center",
}));

export default function NavList() {
  return (
    <>
      <StyledLink
        variant="button"
        color="primary.main"
        href="/"
        sx={{
          fontSize: [4, 16],
        }}
      >
        Home
      </StyledLink>
      <StyledLink
        variant="button"
        color="primary.main"
        href="/jeans"
        sx={{
          fontSize: [4, 16],
        }}
      >
        Jeans
      </StyledLink>
      <StyledLink
        variant="button"
        color="primary.main"
        href="/shirts"
        sx={{
          fontSize: [4, 16],
        }}
      >
        Sneakers
      </StyledLink>
    </>
  );
}
