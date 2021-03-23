import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { GridContext } from "../../App";
import { Note } from "../../models/Note";
import { NoteService } from "../../services/notes.service";

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
      transition: "0.25s",
      "&:hover": {
        background: theme.palette.background.default,
      },
    },
  })
);

export default function NotesLayout() {
  // const user = useContext(UserContext);
  const grid = useContext(GridContext);
  const [notes, setNotes] = useState<Note[]>([]);
  const classes = useStyles();
  const breakpoints = { default: 4, 1920: 5, 1280: 4, 960: 3, 600: 2 };
  // console.log(user.uid);
  // useEffect(() => {
  //   const noteService = new NoteService();
  //   const getNotes = async () =>
  //     noteService
  //       .getAllNotes()
  //       .then((note) => setNotes(note))
  //       .catch((err) => console.error(err));
  //   if (user.uid) getNotes();
  // }, [user.uid]);

  return (
    <Masonry
      breakpointCols={grid ? breakpoints : 1}
      className={classes.root}
      columnClassName={classes.column}
    >
      {notes.map(({ nid, title, content }) => {
        return (
          <Card className={classes.note} key={nid}>
            <div>
              <CardHeader title={title} />
            </div>
            <CardContent>{content}</CardContent>
            <CardActions></CardActions>
          </Card>
        );
      })}
    </Masonry>
  );
}
