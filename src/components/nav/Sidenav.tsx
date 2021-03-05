import {
  AppBar,
  createStyles,
  IconButton,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import {
  DescriptionOutlined,
  DescriptionRounded,
  ArchiveOutlined,
  ArchiveRounded,
  DeleteOutlined,
  DeleteRounded,
} from "@material-ui/icons";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: (menu) => ({
      display: "flex",
      top: "auto",
      bottom: "0",
      height: "auto",
      opacity: "0.95",
      background: theme.palette.background.default,
      [theme.breakpoints.up(475)]: {
        flexDirection: "row",
        width: "5rem",
        top: "3.9rem",
        left: "0",
        right: "auto",
        boxSizing: "content-box",
        paddingRight: menu ? "6rem" : "0",
      },
    }),
    nav: {
      width: "100%",
      justifyContent: "space-around",
      [theme.breakpoints.up(475)]: {
        flexDirection: "column",
        alignItems: "center",
        height: "350px",
      },
    },
    navName: {
      display: "none",
      [theme.breakpoints.up(475)]: {
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "flex-start",
        height: "350px",
        left: "5rem",
      },
    },
    buttons: {
      width: "9rem",
      borderRadius: "0 30px 30px 0",
      height: "30px",
      left: "-5rem",
    },
  })
);

export default function SideNav({ menu }: any) {
  const classes = useStyles(menu);
  const location = useLocation();
  const route: string = location.pathname;
  const background = { background: "#ffffff14" };

  return (
    <AppBar elevation={0} position='fixed' className={classes.root}>
      <div className={classes.nav}>
        <NavLink to='home'>
          <IconButton>
            {route === "/home" ? (
              <DescriptionRounded />
            ) : (
              <DescriptionOutlined />
            )}
          </IconButton>
        </NavLink>

        <NavLink to='archives'>
          <IconButton>
            {route === "/archives" ? <ArchiveRounded /> : <ArchiveOutlined />}
          </IconButton>
        </NavLink>
        <NavLink to='trash'>
          <IconButton>
            {route === "/trash" ? <DeleteRounded /> : <DeleteOutlined />}
          </IconButton>
        </NavLink>
      </div>
      {menu ? (
        <span>
          <div className={classes.navName}>
            <Typography>Notes</Typography>
            <Typography>Archives</Typography>
            <Typography>Trash</Typography>
          </div>
          <div className={classes.navName}>
            <NavLink to='home'>
              <IconButton
                style={route === "/home" ? background : {}}
                className={classes.buttons}
              ></IconButton>
            </NavLink>
            <NavLink to='archives'>
              <IconButton
                style={route === "/archives" ? background : {}}
                className={classes.buttons}
              ></IconButton>
            </NavLink>
            <NavLink to='trash'>
              <IconButton
                style={route === "/trash" ? background : {}}
                className={classes.buttons}
              ></IconButton>
            </NavLink>
          </div>
        </span>
      ) : (
        <></>
      )}
    </AppBar>
  );
}
