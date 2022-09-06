import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";

type Anchor = "left";

export default function MenuDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box sx={{ maxWidth: "auto", width: "200px" }} role="presentation">
      <List>
        {["Home", "Jeans", "Shirts", "Carts"].map((text) => (
          <ListItem key={text} disablePadding>
            <Button
              href={`${text === "Home" ? "/" : `/${text.toLocaleLowerCase()}`}`}
              sx={{ textDecoration: "none" }}
            >
              <ListItemText primary={text} />
            </Button>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Login", "Demo User"].map((text) => (
          <ListItem key={text} disablePadding>
            <Button
              href={`/${text.toLocaleLowerCase()}`}
              sx={{ textDecoration: "none" }}
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
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon fontSize="medium" />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
