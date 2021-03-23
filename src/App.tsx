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
import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Profile from "./components/auth/Profile";
import SideNav from "./components/nav/Sidenav";
import Topbar from "./components/nav/Topbar";
import Routes from "./Routes";
import { AuthService } from "./services/auth.service";

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
    isAuthenticated: false,
    dark: localStorage.getItem("theme") === "dark",
    menu: useMediaQuery(useTheme().breakpoints.up("sm")),
    grid: true,
    showProfile: false,
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
  const getTheme = async () => {
    setState({ ...state, dark: !state.dark });
  };
  const getMenu = () => {
    setState({ ...state, menu: !state.menu });
  };
  const getGrid = () => {
    setState({ ...state, grid: !state.grid });
  };
  const getProfileState = () => {
    setState({ ...state, showProfile: !state.showProfile });
  };

  const classes = useStyles(state.menu);

  useEffect(() => {
    const auth = new AuthService();
    state.dark
      ? localStorage.setItem("theme", "dark")
      : localStorage.setItem("theme", "light");
    auth
      .oauth2User()
      .then((user) => localStorage.setItem("user", JSON.stringify(user.data)))
      .catch((err) => console.error(err));
    auth
      .getUser()
      .then((user) => localStorage.setItem("user", JSON.stringify(user.data)))
      .catch((err) => console.error(err));
  }, [state.dark]);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Topbar
          state={state}
          changeTheme={getTheme}
          changeMenu={getMenu}
          changeGrid={getGrid}
          showProfile={getProfileState}
        />
        {state.showProfile ? <Profile /> : <></>}
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
