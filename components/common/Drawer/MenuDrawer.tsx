import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";

export default function MenuDrawer() {
  const [showNavDrawer, setShowNavDrawer] = useState(false);

  const list = () => (
    <Box sx={{ maxWidth: "auto", width: "200px" }} role="presentation">
      <List>
        {["Home", "Pc", "Ps5", "Xbox"].map((text) => (
          <ListItem key={text} disablePadding>
            <Button
              href={`${
                text === "Home" ? "/" : `/${text.toLocaleLowerCase()}`
              } `}
              sx={{ textDecoration: "none", ml: 2 }}
            >
              <ListItemText primary={text} />
            </Button>
          </ListItem>
        ))}
        <Button href={`carts`} sx={{ textDecoration: "none", ml: 2 }}>
          Carts (0)
        </Button>
      </List>
      <Divider />
      <List>
        {["Login", "Demo User"].map((text) => (
          <ListItem key={text} disablePadding>
            <Button
              href={`/${text.toLocaleLowerCase()}`}
              sx={{ textDecoration: "none", ml: 2 }}
            >
              <ListItemText primary={text} />
            </Button>
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
