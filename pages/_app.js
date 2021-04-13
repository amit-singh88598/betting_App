import {
  createMuiTheme,
  makeStyles,
  NoSsr,
  Switch,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import "../styles/globals.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import "../styles/custom.css";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      backgroundImage: 'url("/wall.jpg")',
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
  },
}));

const customBreakpointValues = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
};
const breakpoints = createBreakpoints({ ...customBreakpointValues });

function MyApp({ Component, pageProps }) {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#1c1f1d", // Grey ( Header )
        light: "#404040", // Dark Grey
        background: "#2d6948", // Green color
        grey: "#284d38", //dark green
      },
      secondary: {
        main: "#ffffff", // White
        light: "#ffd76e", // Golden Color
        grey: "#403e3e", // darkGrey
        background: "#000000", //Light Grey
      },
    },
    typography: {
      h1: {
        fontFamily: "Work Sans",
        fontWeight: 500,
        fontSize: "2.2em",
      },
      body2: {
        fontFamily: "ABeeZee",
        fontSize: 16,
      },
      subtitle1: {
        fontFamily: '"Hind Madurai"',
        fontWeight: 300,
        [breakpoints.down("sm")]: {
          fontSize: 14,
        },
      },
    },
  });
  return (
    <NoSsr>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography>Modes</Typography>
          <Switch
            color="primary"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div> */}
        {/* <AuthProvider> */}
        <div className={classes.root}>
          <Component {...pageProps} />
        </div>
        {/* </AuthProvider> */}
      </ThemeProvider>
    </NoSsr>
  );
}

export default MyApp;
