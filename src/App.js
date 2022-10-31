import React, { useEffect, useReducer, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import "./style.css";
// import axios from 'axios'

export const NotesContext = React.createContext();

const reducer = (notes, action) => {
  switch (action.type) {
    case "saveNotes":
      return saveNotes(notes, action.payload.note);
    case "editNote":
      return editNote(notes, action.payload.note, action.payload.id);
    // case 'dataFormServer':
    //   return dataFormServer(notes,action.payload.data)
    default:
      throw console.log("This is Not Registered Action");
  }
};

// const dataFormServer = (notes,data) => {
//   console.log(data)
// }

const saveNotes = (notes, note) => [...notes, { ...note, id: Date.now() }];

const editNote = (notes, note, id) => {
  let index = notes.findIndex((ele) => ele.id === id);
  notes[index].title = note.title;
  notes[index].description = note.description;
  return [...notes];
};

function App() {
  const data = JSON.parse(localStorage.getItem('notes') ==='undefined' ?'[]' : localStorage.getItem('notes'))
  const [notes, dispatch] = useReducer(reducer,data || []);
  const [open, setOpen] = useState(() => false);
  const [selectedId, setSelectedId] = useState(undefined);

  // This state is for getting data from inputs

  const [note, setNote] = useState({
    title: "",
    description: "",
  });

  useEffect(()=>{
    localStorage.setItem('notes', JSON.stringify(notes))
  },[notes])

  // useEffect(()=>{
  //   axios.get('https://jsonplaceholder.typicode.com/posts/18').then(response => dispatch({type:'dataFormServer',payload:{data:response.data}}))
  // },[])



  const handleChange = (e) => {
    setNote((prevNote) => ({ ...prevNote, [e.target.name]: e.target.value }));
  };
  // upto here

  // these fucntions for Notes Reducer

  const saveNotes = (type, note) => {
    if (note.title === "" || note.description === "") {
      alert("Note Can't be Empty");
    } else {
      dispatch({ type: type, payload: { note: note } });
      setNote({
        title: "",
        description: "",
      });
    }
  };

  const editNoteFun = (type, note, id) => {
    if (note.title === "" || note.description === "") {
      alert("Note Can't be Empty");
    } else {
      dispatch({ type: type, payload: { note: note, id: id } });
      setNote({
        title: "",
        description: "",
      });
      setSelectedId(undefined);
    }
  };

  const AddNewNote = (type) => {
    dispatch({ type: type });
  };

  const handleNoteClick = (id) => {
    let selectNote = notes.find((ele) => ele.id === id);
    setNote({ title: selectNote.title, description: selectNote.description });
    setSelectedId(selectNote.id);
  };

  return (
    <NotesContext.Provider
      value={{
        note,
        handleChange,
        saveNotes,
        notes,
        AddNewNote,
        open,
        setOpen,
        handleNoteClick,
        selectedId,
        editNoteFun,
      }}
    >
      <Header />
      <Body />
    </NotesContext.Provider>
  );
}

export default App;
