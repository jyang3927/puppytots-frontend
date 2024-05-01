import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './components/homepage/Homepage';
import { Route, Routes } from 'react-router-dom';
import { PuppiesPage } from './components/puppies/PuppiesPage';
import { Maltipoo } from './components/breeds/Maltipoo';
import { ToyPoodle } from './components/breeds/ToyPoodle';
import { Shihpoo } from './components/breeds/Shihpoo';
import { Puppy } from './components/puppies/Puppy';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/puppies/:breed" element={<PuppiesPage/>}/>
        <Route path="/puppies/:breed/:id" element={<Puppy/>}/>
      </Routes>
    </div>
  );
}

export default App;
