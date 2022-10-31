import React, { useContext } from "react";
import { NotesContext } from "../App";

const SideBar = () => {
  const { notes, handleNoteClick, selectedId } = useContext(NotesContext);

  return (
    <div className="side-bar">
      {notes.map((ele, index) => (
        <div
          key={ele.id}
          className={selectedId === ele.id ? "Note-Box selected" : "Note-box"}
          onClick={() => handleNoteClick(ele.id)}
        >
          <div>
            {index + 1} . {ele.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
