import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './components/homepage/Homepage';
import { Route, Routes } from 'react-router-dom';
import { PuppiesPage } from './components/puppies/PuppiesPage';
import { ContactUs } from './components/contact-us/ContactUs';
import { OurDogs } from './components/our-dogs/OurDogs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/ourDogs/getDogs" element={<OurDogs/>}/>
        <Route path="/puppies/:breed" element={<PuppiesPage/>}/>
        {/* <Route path="/puppies/:breed/:id" element={<PuppyCard/>}/> */}
        <Route path="/contactUs" element={<ContactUs/>}/>
      </Routes>
    </div>
  );
}

export default App;
