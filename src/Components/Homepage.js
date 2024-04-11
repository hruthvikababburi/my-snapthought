import React from 'react'
import EachNote from './EachNote'
import { Link } from 'react-router-dom';

export default function HomePage() {
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
      <EachNote/>
      <EachNote/>
      <EachNote/>

      
      
    </div>
    
  )
}
