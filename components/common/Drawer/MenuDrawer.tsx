import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "@/components/Link";

const StyledLink = styled(Link)(() => ({
  textDecoration: "none",
  margin: "5px 15px",
  flexGrow: 1,
  justifyContent: "center",
  alignItems: "center",
}));

export default function MenuDrawer() {
  const [showNavDrawer, setShowNavDrawer] = useState(false);

  const list = () => (
    <Box sx={{ maxWidth: "auto", width: "200px" }} role="presentation">
      <List>
        <ListItem disablePadding>
          <StyledLink
            href={"/"}
            sx={{
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "700",
            }}
          >
            <ListItemText primary={"Home"} />
          </StyledLink>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <StyledLink href={`carts`} sx={{ textDecoration: "none" }}>
            Carts (0)
          </StyledLink>
        </ListItem>
      </List>

      <Divider />
      <List>
        {["Login", "Demo User"].map((text) => (
          <ListItem key={text} disablePadding>
            <StyledLink
              href={`/${text.toLocaleLowerCase()}`}
              sx={{ textDecoration: "none", ml: 2 }}
            >
              <ListItemText primary={text} />
            </StyledLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={() => setShowNavDrawer(true)}>
        <MenuIcon fontSize="medium" />
      </Button>
      <Drawer
        anchor={"left"}
        open={showNavDrawer}
        onClose={() => setShowNavDrawer(false)}
      >
        {list()}
      </Drawer>
    </div>
  );
}
