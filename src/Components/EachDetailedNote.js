import React, { useContext,useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import NoteContext from '../Contexts/NoteContext';
import ReactPlayer from 'react-player';

export default function EachDetailedNote() {
    const { id } = useParams();
    const { notes } = useContext(NoteContext);
    const navigate = useNavigate()
    const {editNote} = useContext(NoteContext)

    // Find the note based on the provided ID
    const note = notes.find((each) => each.id === id);
    
    const [brieftitle,setBriefTitle] = useState(note.title)
    const [briefdescription,setBriefDescription] = useState(note.description)
    const [brieflink,setBriefLink] = useState(note.link)
    const [briefMediaType,setBriefMediaType] = useState(note.mediaType)



    const handleBriefTitleChange = (event) => {
      setBriefTitle(event.target.value);
  };

  // Handle description change
  const handleBriefDescriptionChange = (event) => {
      setBriefDescription(event.target.value);
  };

  // Handle link change
  const handleBriefLinkChange = (event) => {
      setBriefLink(event.target.value);
      if (event.target.value) {
        if (event.target.value.endsWith('.jpg') || event.target.value.endsWith('.png') || event.target.value.endsWith('.gif') || event.target.value.endsWith('.jpeg')) {
            setBriefMediaType('image');
        } else if (ReactPlayer.canPlay(event.target.value)) {
            setBriefMediaType('video');
        } else {
            setBriefMediaType(null);
        }
    } else {
        setBriefMediaType(null);
    }

  };

  const handleSaveChanges = () => {
    // Create an updated note object
    const updatedNote = {
        ...note,
        title: brieftitle,
        description:briefdescription,
        link: brieflink,
        mediaType: briefMediaType
        // Include other properties that may need to be updated
    };

    editNote(updatedNote)

    
    // Redirect to homepage or navigate as desired
    navigate('/');
};



  

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
            <div className='brief-content-cont'>
              <input type='text' className='brief-note-title' value={brieftitle} onChange={handleBriefTitleChange}/>
              <textarea className='brief-note-description' value={briefdescription} rows={8} onChange={handleBriefDescriptionChange}/>
              <input type='search' className='brief-note-link' value={brieflink} onChange={handleBriefLinkChange}/>
              <button className='save-changes-btn' onClick={handleSaveChanges}>Save</button>
            </div>
            {brieflink && (
                <div className='img-vid-cont'>
                    {note.mediaType === 'image' ? (
                        <img 
                            src={brieflink} 
                            alt={brieftitle} 
                            className='brief-image' 
                            style={{ width: '90%', height: 'auto',objectFit:'cover' }}
                        />
                    ) : note.mediaType === 'video' ? (
                        <ReactPlayer 
                            url={brieflink} 
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
