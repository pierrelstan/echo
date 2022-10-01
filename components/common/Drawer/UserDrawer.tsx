import React, { useState, Fragment } from "react";
import { styled } from "@mui/material/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Drawer, Button, Box, Container } from "@mui/material";

import LoginForm from "components/LoginForm";

const Wrapper = styled("div")(() => ({
  marginTop: "50px",
}));

export default function UserDrawer() {
  const [showNavDrawer, setShowNavDrawer] = useState(false);

  return (
    <div>
      <Fragment>
        <Button onClick={() => setShowNavDrawer(true)}>
          <AccountCircleIcon />
        </Button>
        <Drawer
          anchor={"right"}
          open={showNavDrawer}
          onClose={() => setShowNavDrawer(false)}
        >
          <Container>
            <Box
              sx={{
                width: "100%",
                maxWidth: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                justifyItems: "center",
              }}
              role="presentation"
            >
              <Wrapper />
              <LoginForm />
            </Box>
          </Container>
        </Drawer>
      </Fragment>
    </div>
  );
}
