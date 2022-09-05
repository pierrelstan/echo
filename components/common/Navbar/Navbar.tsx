import { AppBar, Toolbar, Button, Box, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
import Nav from "./Nav";
import LoginDrawer from "../Drawer/LoginDrawer";
import MenuDrawer from "../Drawer/MenuDrawer";

const IsHeaderDisplay = styled("div")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));

const IsMobileView = styled("div")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Logo = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Navbar() {
  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          backgroundColor: "background.default",
          color: "primary.main",
        }}
      >
        <Toolbar
          sx={{
            flexWrap: "wrap",
            flexGrow: 1,
          }}
        >
          <MenuDrawer />
          <Grid>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", marginLeft: "10px", fontSize: "18px" }}
              align="center"
            >
              Echo Store
            </Typography>
          </Grid>
          <Logo sx={{ flexGrow: 1 }}></Logo>
          <IsMobileView>
            <Nav>
              <Button
                variant="contained"
                size="small"
                sx={{
                  my: 1,
                  mx: 1.4,
                  fontSize: [4, 16],
                  width: "auto",
                  ":hover": {
                    backgroundColor: "primary.main",
                  },
                }}
              >
                Demo User
              </Button>
            </Nav>
            <LoginDrawer />

            <Button href={"/carts"}>
              <ShoppingCartIcon />
            </Button>
          </IsMobileView>
        </Toolbar>
      </AppBar>
    </>
  );
}
