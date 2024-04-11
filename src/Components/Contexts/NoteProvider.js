import NoteContext from "./NoteContext";
import React,{useState,useEffect} from 'react'

export default function NoteProvider({children}) {
  // Initialize the state for notes
  const [notes, setNotes] = useState([]);

  // Loading notes from local storage when the provider mounts
  useEffect(() => {
      const loadNotesFromLocalStorage = () => {
          const notesJSON = localStorage.getItem('notes');
          if (notesJSON) {
              return JSON.parse(notesJSON);
          }
          return [];
      };

      const loadedNotes = loadNotesFromLocalStorage();
      setNotes(loadedNotes);
  }, []);

  // Function to save notes to local storage
  const saveNotesToLocalStorage = (updatedNotes) => {
      const notesJSON = JSON.stringify(updatedNotes);
      localStorage.setItem('notes', notesJSON);
  };

  // Function to add a new note
  const addNote = (newNote) => {
      const updatedNotes = [...notes, newNote];
      setNotes(updatedNotes);
      saveNotesToLocalStorage(updatedNotes);
  };

  // Function to edit a note
  const editNote = (updatedNote) => {
      const updatedNotes = notes.map((note) =>
          note.id === updatedNote.id ? updatedNote : note
      );
      setNotes(updatedNotes);
      saveNotesToLocalStorage(updatedNotes);
  };

  // Function to delete a note
  const deleteNote = (noteId) => {
      const updatedNotes = notes.filter((note) => note.id !== noteId);
      setNotes(updatedNotes);
      saveNotesToLocalStorage(updatedNotes);
  };

  const [urlId,setUrlId] = useState(null)

  // Provide the context value
  return (
      <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote,urlId,setUrlId }}>
          {children}
      </NoteContext.Provider>
  );
}
