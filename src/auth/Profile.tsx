import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import Login from "./Login";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "absolute",
      flexDirection: "column",
      background: theme.palette.background.paper,
      width: "300px",
      borderRadius: "10px",
      zIndex: 1000,
      right: "1rem",
      top: "3.5rem",
      border: "1px solid rgba(66,66,66,0.2)",
      backdropFilter: "blur(10px)",
      padding: theme.spacing(2),
      alignItems: "center",
    },
  })
);

export default function Profile() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Login />
    </div>
  );
}
