import React, { useContext } from 'react'
import EmptyBody from './EmptyBody'
import NotesBody from './NotesBody'
import SideBar from './SideBar'
import { NotesContext } from '../App'

const Body = () => {
    const {open} = useContext(NotesContext)
  return (
    <div className='fullbody-notes'>
      {open ? <><NotesBody /><SideBar/></>:<EmptyBody/>}
    </div>
  )
}

export default Body
