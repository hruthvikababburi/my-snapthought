import React, { useContext, useState } from 'react';
import ReactPlayer from 'react-player';
import { TwitterPicker } from 'react-color';
import NoteContext from '../Contexts/NoteContext';
import { v4 as uuidv4 } from 'uuid';

const CreateNotepage = () => {
    const { addNote } = useContext(NoteContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [mediaType, setMediaType] = useState(null);
    const [backgroundColor, setBackgroundColor] = useState('');

    // Handle form submission
    const handleFormSubmit = () => {
        // Call handleAddLink to ensure mediaType is set before creating the note
        handleAddLink();
        if (title && description) {
            const newNote = {
                id: uuidv4(),
                title,
                description,
                link,
                mediaType,
                backgroundColor,
                creationTime: new Date().toISOString(),
            };

            console.log(newNote)

            // Call the addNote function to save the new note
            addNote(newNote);

            // Reset form fields
            setTitle('');
            setDescription('');
            setLink('');
            setMediaType(null);
            setBackgroundColor('');
        } else {
            alert('Enter valid title and description to save the note');
        }
    };

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

    // Add the link and determine media type (image or video)
    const handleAddLink = () => {
        if (link) {
            if (link.endsWith('.jpg') || link.endsWith('.png') || link.endsWith('.gif') || link.endsWith('.jpeg')) {
                setMediaType('image');
            } else if (ReactPlayer.canPlay(link)) {
                setMediaType('video');
            } else {
                setMediaType(null);
            }
        } else {
            setMediaType(null);
        }
    };

    // Handle color change
    const handleColorChange = (color) => {
        setBackgroundColor(color.hex);
    };

    return (
        <div>
            <div className="note-form" style={{ backgroundColor }}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={handleTitleChange}
                    className='input-title'
                    required
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={handleDescriptionChange}
                    rows={8}
                    className='input-description'
                    required
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
                    {mediaType === 'image' && <img src={link} alt="Media" className='image' />}
                    {mediaType === 'video' && <ReactPlayer url={link} className='video' />}
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
