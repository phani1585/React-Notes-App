import React, { useContext } from "react";
import { NotesContext } from "../App";

const SideBar = () => {
  const { notes } = useContext(NotesContext);

  return (
    <div className="side-bar">
      {notes.map((ele, index) => (
        <div key={ele.id} className="Note-box" >
            <div>Note {index+1}</div>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
