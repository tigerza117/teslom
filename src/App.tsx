import { createTheme, ThemeProvider } from "@mui/material";
import Routes from "./configs/routes";
import "./app.css";

const App = () => {
  const theme = createTheme({
    typography:{
      fontFamily: [
        'Montserrat',
        'sans-serif'
      ].join(',')
    }
  })
  return (
      <ThemeProvider theme={theme}>
      <Routes />
      </ThemeProvider>
  );
};

export default App;
