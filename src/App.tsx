import {
  createMuiTheme,
  createStyles,
  CssBaseline,
  makeStyles,
  Theme,
  ThemeProvider,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";
import React, { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Profile from "./auth/Profile";
import SideNav from "./components/nav/Sidenav";
import Topbar from "./components/nav/Topbar";
import Routes from "./Routes";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    routesPage: (menu) => ({
      position: "relative",
      paddingLeft: menu ? "11rem" : "5rem",
      top: "4rem",
      [theme.breakpoints.down(475)]: {
        paddingLeft: "0",
      },
    }),
  })
);

export const GridContext = createContext(true);

function App() {
  const [state, setState] = useState({
    dark: true,
    menu: useMediaQuery(useTheme().breakpoints.up("sm")),
    grid: true,
  });

  const lightTheme: PaletteOptions = {
    type: "light",
    background: {
      default: "#fff",
      paper: "#f1f3f4",
    },
  };
  const darkTheme: PaletteOptions = {
    type: "dark",
    background: {
      default: "#202124",
      paper: "#f1f3f43d",
    },
  };
  const theme = createMuiTheme({
    palette: state.dark ? darkTheme : lightTheme,
  });
  const getTheme = () => {
    setState({ ...state, dark: !state.dark });
  };
  const getMenu = () => {
    setState({ ...state, menu: !state.menu });
  };
  const getGrid = () => {
    setState({ ...state, grid: !state.grid });
  };

  const classes = useStyles(state.menu);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Topbar
          state={state}
          changeTheme={getTheme}
          changeMenu={getMenu}
          changeGrid={getGrid}
        />
        <Profile />
        <SideNav menu={state.menu} />
        <GridContext.Provider value={state.grid}>
          <div className={classes.routesPage}>
            <Routes />
          </div>
        </GridContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
