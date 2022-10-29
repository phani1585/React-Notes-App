import React, { useContext } from 'react'
import { NotesContext } from '../App'

const EmptyBody = () => {
    const {setOpen}=useContext(NotesContext)
    
  return (
    <div className='empty-body'>
        <div className='add-new-note'>      
            <h2>Add a New Note Here</h2>
      <button className='add-new-note-btn' onClick={()=>setOpen(true)}>ADD</button>
      </div>
    </div>
  )
}

export default EmptyBody
