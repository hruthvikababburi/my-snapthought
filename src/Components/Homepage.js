import React, { useContext } from 'react'
import EachNote from './EachNote'
import { Link } from 'react-router-dom';
import NoteContext from '../Contexts/NoteContext';

export default function HomePage() {
  const {notes} = useContext(NoteContext)
  return (
    <div className='main-cont'>
      <div className='main-upper-cont'>
        <h1 className='title'>SnapThought</h1>
        <Link to='/create-note'>
          <button className='add-note-icon' title='Add Note'>
              plus
          </button>
        </Link>
      </div>
      <input type='search' placeholder='Search Notes' className='input-search'/>
      {notes.map((note)=>{
        return (<EachNote key={note.id} note={note}/>)
      })}
      

      
      
    </div>
    
  )
}
