import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import { Posters } from './pages/Posters/Posters.jsx';
import { PosterDetails } from './components/Posters/PosterDetails.jsx';
import { PosterList } from './components/Posters/Posterlist.jsx';
import { Omos } from './pages/Omos/Omos.jsx';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posters" element={<Posters />} >
          <Route path=":genre" element={<PosterList />} />
          <Route path=":genre/:poster" element={<PosterDetails />} />
        </Route>
        <Route path="/omos" element={<Omos />} />
      </Routes>
    </div>
  );
}

export default App;
