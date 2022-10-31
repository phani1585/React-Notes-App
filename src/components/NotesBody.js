import React, { useContext } from "react";
import { NotesContext } from "../App";
const NotesBody = () => {
  const { note, handleChange } = useContext(NotesContext);

  return (
    <div className="notes-body-wrapper">
        <input
          className="notes-head"
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="#Enter Your Notes Title Here"
          type="text"
        />
        <textarea
          className="notes-body"
          name="description"
          value={note.description}
          onChange={handleChange}
          placeholder="# Type Your Notes"
        ></textarea>
    </div>
  );
};

export default NotesBody;
