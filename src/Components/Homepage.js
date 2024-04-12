import React, { useContext, useState } from 'react';
import EachNote from './EachNote';
import NoteContext from '../Contexts/NoteContext';
import FloatingButton from './FloatingButton';

export default function HomePage() {
    const { notes } = useContext(NoteContext);
    const [searchQuery, setSearchQuery] = useState('');

   
    const filteredNotes = notes.filter(note => 
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        note.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className='main-cont'>
            <div className='main-upper-cont'>
                <h1 className='title'>SnapThought</h1>
            </div>
            
            <input 
                type='search' 
                placeholder='Search Notes' 
                className='input-search' 
                value={searchQuery} 
                onChange={handleSearchChange} 
            />
            
           
            {filteredNotes.length > 0 ? (
                filteredNotes.map((note) => (
                    <EachNote key={note.id} note={note} />
                ))
            ) : (
                <div className='no-results-message'>There's nothing here!</div>
            )}
            
            <FloatingButton />
        </div>
    );
}
