import React, { useContext } from "react";
import { NotesContext } from "../App";

const Header = () => {
  const { saveNotes, note, setOpen, selectedId, editNoteFun, open } =
    useContext(NotesContext);

  return (
    <div className="header">
      <h1>Notes App</h1>
      {selectedId !== undefined ? (
        <button
          onClick={() => editNoteFun("editNote", note, selectedId)}
          className="save-btn"
        >
          Update
        </button>
      ) : open ? (
        <>
          <button
            onClick={() => saveNotes("saveNotes", note)}
            className="save-btn"
          >
            {" "}
            Save{" "}
          </button>
          <button onClick={() => setOpen(false)} className="save-btn">
            Close
          </button>
        </>
      ) : (
        " "
      )}
    </div>
  );
};

export default Header;
