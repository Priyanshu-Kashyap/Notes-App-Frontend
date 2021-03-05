import {
  AppBar,
  createStyles,
  Hidden,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
  useMediaQuery,
  useScrollTrigger,
} from "@material-ui/core";
import {
  AccountCircleOutlined,
  Brightness3Rounded,
  CreateOutlined,
  DashboardOutlined,
  FlareRounded,
  MenuOutlined,
  SearchOutlined,
  ViewAgendaOutlined,
} from "@material-ui/icons";
import React from "react";
import { useLocation } from "react-router-dom";
import Searchbar from "./Searchbar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      padding: "0 2px",
      background: theme.palette.background.default,
      justifyContent: "space-between",
      borderRadius: "0",
      zIndex: 100,
    },
    logo: {
      background: "linear-gradient(45deg, #ff8a00, #e52e71)",
      borderRadius: "5px",
      padding: "2px",
      margin: "5px",
      color: "#ffffffe0",
    },
    iconSection: {
      width: "auto",
      justifySelf: "flex-end",
    },
    capitalize: {
      textTransform: "capitalize",
    },
    rotate: {
      transform: "rotate(30deg)",
    },
    menuIcon: {
      [theme.breakpoints.up("sm")]: {
        transform: "translateX(-10px)",
      },
    },
  })
);

export default function Topbar({
  state,
  changeTheme,
  changeMenu,
  changeGrid,
}: any) {
  const classes = useStyles();
  const phone: boolean = useMediaQuery("(min-width:475px)");
  const trigger: boolean = useScrollTrigger();
  const location = useLocation();
  const route: string = location.pathname.replace("/", "");

  return (
    <AppBar
      position='fixed'
      elevation={trigger ? 20 : 0}
      className={classes.root}
    >
      <Toolbar>
        <div>
          {phone ? (
            <IconButton onClick={changeMenu} className={classes.menuIcon}>
              <MenuOutlined />
            </IconButton>
          ) : (
            <></>
          )}
          <IconButton disabled>
            <div className={classes.logo}>
              <CreateOutlined />
            </div>
            {phone ? (
              <Typography variant='h6' className={classes.capitalize}>
                {route === "home" ? "notes" : route}
              </Typography>
            ) : (
              <></>
            )}
          </IconButton>
          <Hidden xsDown>
            <Searchbar />
          </Hidden>
        </div>
        <div className={classes.iconSection}>
          <Hidden smUp>
            <IconButton>
              <SearchOutlined />
            </IconButton>
          </Hidden>
          <IconButton onClick={changeGrid}>
            {state.grid ? <DashboardOutlined /> : <ViewAgendaOutlined />}
          </IconButton>
          <IconButton onClick={changeTheme}>
            {state.dark ? (
              <Brightness3Rounded className={classes.rotate} />
            ) : (
              <FlareRounded />
            )}
          </IconButton>
          <IconButton>
            <AccountCircleOutlined />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
