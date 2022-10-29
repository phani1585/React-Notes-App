import React,{ useReducer, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import './style.css';

export const NotesContext = React.createContext()

const reducer = (notes,action) => {
    switch(action.type){
      case "saveNotes":
        return saveNotes(notes,action.payload.note)
      default :
        throw console.log("This is Not Registered Action")
    }
}
  

const saveNotes = (notes,note) => ([...notes,note])


function App() {
  const [notes, dispatch] = useReducer(reducer,[])
  const [open, setOpen] = useState(()=>false)

// This state is for getting data from inputs

  const [note,setNote]=useState({
    title:'',
    description:''
})

const handleChange = (e) => {
setNote((prevNote)=>({...prevNote,[e.target.name] : e.target.value}))
};
// upto here 

// these fucntions for Notes Reducer 

  const saveNotes = (type,note) => {
    dispatch({type:type,payload:{note:note,id:Date.now()}})
    setNote({
      title:'',
      description: ''
    })
  }

  const AddNewNote = (type) => {
    dispatch({type:type})
  }

  return (
      <NotesContext.Provider value={{note,handleChange,saveNotes,notes,AddNewNote, open, setOpen}}>
      <Header/>
      <Body/>
      </NotesContext.Provider>
  );
}

export default App;
