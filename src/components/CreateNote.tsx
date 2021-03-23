import {
  Button,
  createStyles,
  IconButton,
  InputBase,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import {
  ArchiveOutlined,
  CheckBoxOutlined,
  DeleteOutlined,
  Gesture,
  ImageOutlined,
  Redo,
  Undo,
} from "@material-ui/icons";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Note } from "../models/Note";
import { NoteService } from "../services/notes.service";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: "40rem",
      width: "90%",
      borderRadius: "0.5rem",
      background: theme.palette.background.default,
      border: "1px solid rgba(66,66,66,0.2)",
      margin: "2rem",
      boxShadow: theme.shadows[10],
    },
    icons: {
      width: "auto",
    },
    takeNote: {
      flexDirection: "column",
      justifyContent: "flex-start",
      padding: theme.spacing(1),
      paddingBottom: "0",
    },
    actions: {
      justifyContent: "space-between",
    },
    buttons: {
      justifyContent: "space-around",
      width: "auto",
    },
  })
);
export default function CreateNote() {
  const noteService = useMemo(() => new NoteService(), []);
  const classes = useStyles();
  const [takeNote, setTakeNote] = useState(false);
  const [noteDetails, setNoteDetails] = useState<Note>({
    title: "",
    content: "",
    images: [],
    archive: false,
    trash: false,
    editDate: new Date(),
    user: JSON.parse(localStorage.getItem("user") as string),
  });

  const node = useRef<HTMLDivElement>(null);

  const handleSubmit = () => {
    if ((noteDetails.title || noteDetails.content) !== "")
      return noteService.saveNote(noteDetails);
    setTakeNote(false);
  };
  const note = (e: any) => {
    if (node.current?.contains(e.target)) return;
    handleSubmit();
  };
  useEffect(() => {
    document.addEventListener("mousedown", note);
    const saveNote = () => {};
    return () => {
      document.removeEventListener("mousedown", note);
    };
  });

  return (
    <div ref={node} className={classes.root}>
      {!takeNote ? (
        <div
          onClick={() => setTakeNote(true)}
          style={{ justifyContent: "space-between" }}
        >
          <Typography style={{ marginLeft: "12px", opacity: "50%" }}>
            Take a note...
          </Typography>
          <div className={classes.icons}>
            <IconButton>
              <CheckBoxOutlined />
            </IconButton>
            <IconButton>
              <Gesture />
            </IconButton>
            <IconButton>
              <ImageOutlined />
            </IconButton>
          </div>
        </div>
      ) : (
        <div className={classes.takeNote}>
          <InputBase
            margin="dense"
            style={{ fontSize: "1.1rem" }}
            placeholder="Title"
          />
          <InputBase
            margin="dense"
            autoFocus
            multiline
            placeholder="Take a note..."
          />
          <div className={classes.actions}>
            <div className={classes.buttons}>
              <IconButton>
                <ImageOutlined />
              </IconButton>
              <IconButton>
                <CheckBoxOutlined />
              </IconButton>
              <IconButton>
                <Gesture />
              </IconButton>
              <IconButton>
                <DeleteOutlined />
              </IconButton>
              <IconButton>
                <ArchiveOutlined />
              </IconButton>
              <IconButton>
                <Undo />
              </IconButton>
              <IconButton>
                <Redo />
              </IconButton>
            </div>
            <Button onClick={handleSubmit}>Close</Button>
          </div>
        </div>
      )}
    </div>
  );
}
