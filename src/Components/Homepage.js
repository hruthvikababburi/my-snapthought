import React, { useContext } from 'react'
import EachNote from './EachNote'
// import { Link } from 'react-router-dom';
import NoteContext from '../Contexts/NoteContext';
import FloatingButton from './FloatingButton';

export default function HomePage() {
  const {notes} = useContext(NoteContext)
  return (
    <div className='main-cont'>
      <div className='main-upper-cont'>
        <h1 className='title'>SnapThought</h1>
        
      </div>
      <input type='search' placeholder='Search Notes' className='input-search'/>
      {notes.map((note)=>{
        return (<EachNote key={note.id} note={note}/>)
      })}
      <FloatingButton/>
      

      
      
    </div>
    
  )
}
