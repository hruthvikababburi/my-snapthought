import React, { useContext } from 'react'
import NoteContext from '../Contexts/NoteContext'
import { Link } from 'react-router-dom'
export default function EachNote(props) {
  const {deleteNote} = useContext(NoteContext)
  const handleDeleteNote=()=>{
    deleteNote(props.note.id)
  }
  return (
    
    <div className='each-note-cont'>
        <Link to={`/note/${props.note.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
            <h2 className='each-note'>{props.note.title}</h2>
        </Link>
        <button className='delete-note' title='Delete Note' onClick={handleDeleteNote}>
            Delete
        </button>
    </div>
   
  )
}
