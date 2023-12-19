import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#3A40FB",
      light: "#42D7F8",
    },
    secondary: {
      main: "#808080",
    },
    background: {
      default: "#000000",
    },
    text: {
      primary: "#EDEDED",
      secondary: "#B9B9B9",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

export default theme;
