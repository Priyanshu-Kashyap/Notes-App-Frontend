import { makeStyles, Theme, createStyles } from "@material-ui/core";
import React, { useContext } from "react";
import Masonry from "react-masonry-css";
import { GridContext } from "../../App";
import { Note } from "../../models/Note";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "stretch",
      [theme.breakpoints.down(475)]: {
        marginBottom: "3rem",
      },
    },
    column: {
      flexDirection: "column",
      backgroundClip: "padding-box",
      margin: "2px",
      transition: "0.5s",
    },
    note: {
      flexDirection: "column",
      margin: "2px",
      wordBreak: "break-all",
      height: "auto",
      background: theme.palette.background.paper,
      transition: "0.75s",
      "&:hover": {
        background: theme.palette.background.default,
      },
    },
  })
);

export default function NotesLayout() {
  const grid = useContext(GridContext);

  const classes = useStyles();
  const breakpoints = { default: 4, 1920: 5, 1280: 4, 960: 3, 600: 2 };
  const notes: Note[] = [];
  return (
    <Masonry
      breakpointCols={grid ? breakpoints : 1}
      className={classes.root}
      columnClassName={classes.column}
    >
      {notes}
    </Masonry>
  );
}
