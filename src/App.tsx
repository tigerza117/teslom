import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material";
import Routes from "./configs/routes";
import "./app.css";
import { useEffect } from "react";

const App = () => {
  const theme = responsiveFontSizes(
    createTheme({
      components: {
        MuiButtonBase: {
          defaultProps: {
            disableRipple: true,
          },
        },
      },
      typography: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
      },
    })
  );
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    return () => {};
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
