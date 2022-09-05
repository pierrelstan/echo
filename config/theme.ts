import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {},
    primary: {
      // https://coolors.co/2a373c-607d8b-a8dadc
      main: "#C70039",
      light: "#a8dadc",
      dark: "#2A373C",
    },
    secondary: {
      main: "#212121",
    },
  },
});

export default theme;
