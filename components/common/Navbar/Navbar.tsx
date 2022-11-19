import { AppBar, Toolbar, Box, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
import Badge, { BadgeProps } from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Nav from "./Nav";
import UserDrawer from "../Drawer/UserDrawer";
import MenuDrawer from "../Drawer/MenuDrawer";
import Link from "@/components/Link";
import { useAppSelector } from "@/redux/hooks";
import { selectIsCart } from "@/features/user/userSlice";

const IsMobileView = styled("div")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
const StyledBadge = styled(Badge)<BadgeProps>(() => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid`,
    padding: "0 4px",
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
  const cart = useAppSelector(selectIsCart);
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
              <Link href={"/"}>Echo Store</Link>
            </Typography>
          </Grid>
          <Logo sx={{ flexGrow: 1 }}></Logo>
          <IsMobileView>
            <Nav />
            <UserDrawer />
            <IconButton aria-label="cart" href={"/carts"}>
              <StyledBadge badgeContent={cart.length} color="primary">
                <ShoppingCartIcon
                  sx={{
                    color: "primary",
                  }}
                />
              </StyledBadge>
            </IconButton>
          </IsMobileView>
        </Toolbar>
      </AppBar>
    </>
  );
}
