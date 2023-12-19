import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme.tsx";
import { CssBaseline } from "@mui/material";
import Footer from "./shared/Footer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
      <Footer />
    </ThemeProvider>
  </React.StrictMode>
);
