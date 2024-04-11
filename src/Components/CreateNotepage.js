import React, { useState } from 'react';
import ReactPlayer from 'react-player';
// import { FaPlus } from 'react-icons/fa';
import { TwitterPicker } from 'react-color';

const CreateNotepage = ({ addNote }) => {
    // Local state for form inputs
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [mediaType, setMediaType] = useState(null);
    const [backgroundColor, setBackgroundColor] = useState('');
    // const [isFormOpen, setIsFormOpen] = useState(false);

    // Handle title change
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    // Handle description change
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    // Handle link change
    const handleLinkChange = (event) => {
        setLink(event.target.value);
    };

    // Add the link and determine if it is an image or video
    const handleAddLink = () => {
        if (link) {
            if (link.endsWith('.jpg') || link.endsWith('.png') || link.endsWith('.gif') || link.endsWith('.jpeg')) {
                setMediaType('image');
            } else if (ReactPlayer.canPlay(link)) {
                setMediaType('video');
            }
        }
    };

    // Handle color change from the color picker
    const handleColorChange = (color) => {
        setBackgroundColor(color.hex);
    };

    // Handle form submission
    const handleFormSubmit = () => {
        // Create a new note object
        const newNote = {
            title,
            description,
            link,
            mediaType,
            backgroundColor,
            creationTime: new Date().toISOString(),
        };

        // Call the addNote function passed as a prop
        addNote(newNote);

        // Reset form fields after submission
        setTitle('');
        setDescription('');
        setLink('');
        setMediaType(null);
        setBackgroundColor('');
        
    };

    return (
        <div>            
            <div className="note-form">
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={handleTitleChange}
                        className='input-title'
                    />
                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={handleDescriptionChange}
                        rows={5}  
                        className='input-description'
                    />
                    <div className="link-section">
                        <input
                            type="text"
                            placeholder="Image/Video link"
                            value={link}
                            onChange={handleLinkChange}
                            className='input-link'
                        />
                        <button onClick={handleAddLink} className='add-media-btn'>Add</button>
                    </div>
                    <div className="media-preview">
                        {mediaType === 'image' && <img src={link} alt="Media" className='image'/>}
                        {mediaType === 'video' && <ReactPlayer url={link} className='video'/>}
                    </div>
                    <div className="color-picker">
                        <TwitterPicker
                            color={backgroundColor}
                            onChangeComplete={handleColorChange}
                        />
                    </div>

                    <button onClick={handleFormSubmit} className="submit-button">
                        Save Note
                    </button>
                </div>

            
        </div>
    );
};

export default CreateNotepage;
