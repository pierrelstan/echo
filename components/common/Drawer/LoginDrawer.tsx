import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Typography,
  TextField,
  SwipeableDrawer,
  Button,
  Box,
  Stack,
  Grid,
  Container,
} from "@mui/material";

type Anchor = "right";

export default function LoginDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const handleSubmit = () => {};
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = () => (
    <Container>
      <Box
        sx={{
          width: 400,
          maxWidth: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItens: "center",
        }}
        role="presentation"
      >
        <Grid>
          <Typography variant="h4" align="center" m={4}>
            Sign In
          </Typography>
        </Grid>

        <Stack component="form" spacing={2} noValidate autoComplete="off">
          <TextField fullWidth label="Email" id="email" />
          <TextField fullWidth label="Password" id="password" />
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            Sign with Google
          </Button>
          <Typography variant="h6" m={3} align="center">
            Forgot Password
          </Typography>

          <Button variant="contained" href={"/create-a-new-account"}>
            Create a new account
          </Button>
        </Stack>
        <Grid>
          <Typography variant="h6" m={3} align="center">
            Demo User
          </Typography>
        </Grid>
      </Box>
    </Container>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <AccountCircleIcon />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list()}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
