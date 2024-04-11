import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateNotepage from './Components/CreateNotepage';
import Homepage from './Components/Homepage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route exact path="/" element={<Homepage/>} />
            <Route path="/create-note" element={<CreateNotepage/>} />
            
        </Routes>
      </Router>
    </div>
     
  );
}

export default App;


