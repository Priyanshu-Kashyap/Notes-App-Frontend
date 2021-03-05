import { makeStyles, Theme, createStyles } from "@material-ui/core";
import React from "react";
import CreateNote from "../components/CreateNote";
import NotesLayout from "../components/shared/NotesLayout";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexDirection: "column",
      width: "100%",
      justifyContent: "center",
    },
  })
);

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CreateNote />
      <NotesLayout />
    </div>
  );
}
