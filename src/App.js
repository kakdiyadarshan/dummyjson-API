import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Personal from './components/Personal';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { useState } from 'react';

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/personal/:id' element={<Personal />} />
        </Routes>
      </BrowserRouter>
      


    </div>
  );
}

export default App;
