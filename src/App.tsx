import { createTheme, ThemeProvider } from "@mui/material";
import Routes from "./configs/routes";

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
    <div>
      <ThemeProvider theme={theme}>
        <Routes/>
      </ThemeProvider>
    </div>
  );
};

export default App;
