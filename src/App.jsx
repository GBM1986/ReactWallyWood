import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
import Home from './pages/Home.jsx';


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/navbar' element={<Navbar />} /> 
      </Routes>
    </div>
  )
}

export default App;