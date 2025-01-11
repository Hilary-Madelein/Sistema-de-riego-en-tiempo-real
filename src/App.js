import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Principal from './fragments/Principal';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Principal />} />
      </Routes>
    </div>
  );
}

export default App;
