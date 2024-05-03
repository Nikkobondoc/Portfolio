import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Music from './components/Music'; // Import your Music component
import Home from './pages/Home';
import Info from './pages/Info';
import Work from './pages/Work';
import Single from './pages/Single';
import './App.css';
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className='content-area'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/info' element={<Info />} />
          <Route path='/work' element={<Work />} />
          <Route path='/work/:id' element={<Single />} />
          {/* if i want to make multiple pages */}
          {/* <Route path='/work/Wowies' element={<Single />} /> */}
          {/* for mistypes */}
          {/* <Route path='/work/*' element={<Single />} /> */}
          {/* for 404 page */}
          {/* <Route path='/404' element={<Single />} /> */}

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
