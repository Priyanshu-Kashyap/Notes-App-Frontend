import { api } from "../api";
import { Note } from "../models/Note";

export class NoteService {
  static instance: NoteService;
  constructor() {
    if (!NoteService.instance) NoteService.instance = this;
    return NoteService.instance;
  }
  async getAllNotes(type: string = "") {
    const notes: Note[] = (await api.get("/notes")).data;
    if (type === "archive") {
      return notes.filter((note: Note) => (note.archive ? note : null));
    } else if (type === "trash") {
      return notes.filter((note: Note) => (note.trash ? note : null));
    } else
      return notes.filter((note: Note) =>
        !(note.archive && note.trash) ? note : null
      );
  }
  async saveNote(note: Note) {
    return await api.post(`/save`, note);
  }
  async deleteNote(nid: number) {
    return await api.delete(`/${nid}`);
  }
}
