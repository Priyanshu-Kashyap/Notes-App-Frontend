import {
  createStyles,
  InputBase,
  makeStyles,
  Paper,
  Theme
} from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(0.5, 1),
      borderRadius: "5px",
      justifyContent: "space-between",
      maxWidth: "720px",
      height: "3rem",
      margin: "0 auto",
    },
    input: {
      padding: theme.spacing(1),
    },
  })
);

export default function Searchbar() {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      <SearchOutlined />
      <InputBase
        className={classes.input}
        placeholder='Search'
        inputProps={{ "aria-label": "search" }}
      />
    </Paper>
  );
}
