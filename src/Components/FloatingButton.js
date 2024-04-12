import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";

const FloatingButton = () => {
  return (
    <Link to='/create-note'>
          <button className='floating-button add-note-icon' title='Add Note'>
            <FaPlus />
          </button>
    </Link>
  );
};

export default FloatingButton;
