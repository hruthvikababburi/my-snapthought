import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateNotepage from './Components/CreateNotepage';
import Homepage from './Components/Homepage';
import  NoteProvider  from './Contexts/NoteProvider';
import EachDetailedNote from './Components/EachDetailedNote';

function App() {
  return (
    <div className="App">
      <NoteProvider>
      <Router>
        <Routes>
            <Route exact path="/" element={<Homepage/>} />
            <Route path="/create-note" element={<CreateNotepage/>} />
            <Route path="/note/:id" element={<EachDetailedNote/>} />
        </Routes>
      </Router>
      </NoteProvider>
    </div>
     
  );
}

export default App;


