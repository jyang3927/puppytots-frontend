import React from 'react';
import './App.css';
import { HomePage } from './components/homepage/Homepage';
import { Route, Routes } from 'react-router-dom';
import { PuppiesPage } from './components/puppies/PuppiesPage';
import { ContactUs } from './components/contact-us/ContactUs';
import { OurDogs } from './components/our-dogs/OurDogs';
import { AdminPage } from './components/admin-page/AdminPage';
import AuthenticatedRoute from './helpers/AuthenticatedRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/ourDogs/getDogs" element={<OurDogs/>}/>
        <Route path="/puppies/:breed" element={<PuppiesPage/>}/>
        <Route path="/contactUs" element={<ContactUs/>}/>
        {/* FOR ADMIN */}
        <Route path="/adminPage" element={<AdminPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
