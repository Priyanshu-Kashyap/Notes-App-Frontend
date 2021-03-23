import { User } from "./User";

export interface Note {
  title: string;
  content: string;
  nid?: number;
  trash: boolean;
  archive: boolean;
  images?: string[];
  editDate: Date;
  user: User;
}
