import React from 'react';
import { Link } from 'react-router-dom';
// FloatingButton component
const FloatingButton = () => {
  return (
    <Link to='/create-note'>
          <button className='floating-button add-note-icon' title='Add Note'>
              plus
          </button>
    </Link>
  );
};

export default FloatingButton;
