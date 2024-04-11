import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import NoteContext from '../Contexts/NoteContext';
import ReactPlayer from 'react-player';

export default function EachDetailedNote() {
    const { id } = useParams();
    const { notes } = useContext(NoteContext);

    // Find the note based on the provided ID
    const note = notes.find((each) => each.id === id);

    if (!note) {
        // If no note is found, render a message or handle the case as needed
        return <div className='brief-note-cont'>Note not found</div>;
    }

    return (
        <div 
            className='brief-note-cont' 
            style={{ 
                backgroundColor: note.backgroundColor,
                padding: '10px',
                width: '100%',
                boxSizing: 'border-box',
                // overflowX: 'hidden', // Hide horizontal scroll
            }}
        >
            <h2 className='brief-note-title'>{note.title}</h2>
            <p className='brief-note-description'>{note.description}</p>
            {note.link && (
                <div className='img-vid-cont'>
                    {note.mediaType === 'image' ? (
                        <img 
                            src={note.link} 
                            alt={note.title} 
                            className='brief-image' 
                            style={{ width: '90%', height: 'auto',objectFit:'cover' }}
                        />
                    ) : note.mediaType === 'video' ? (
                        <ReactPlayer 
                            url={note.link} 
                            controls 
                            className='brief-video' 
                            width='90%' 
                            height='auto' 
                        />
                    ) : null}
                </div>
            )}
        </div>
    );
}
