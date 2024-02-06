import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import { Posters } from './pages/Posters/Posters.jsx';
import { PosterDetails } from './components/Posters/PosterDetails.jsx';
import { PosterList } from './components/Posters/Posterlist.jsx';
import { Omos } from './pages/Omos/Omos.jsx';
import Kontakt from './pages/Kontakt/Kontakt.jsx';
// import Login from './pages/Login/Login.jsx';
import Login2 from './pages/Login2/Login2.jsx'
import { Cart } from './pages/Cart/Cart';


function App() {
  return (
   
      <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posters" element={<Posters />} >
              <Route path=":genre" element={<PosterList />} />
              <Route path=":genre/:poster" element={<PosterDetails />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/omos" element={<Omos />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/login" element={<Login2 />} />
          </Routes>
      </div>
   
  );
}

export default App;
