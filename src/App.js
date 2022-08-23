import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home.js';
import Number from './components/Number.js';
import Hello from './components/Hello.js';
import Color from './components/Color.js'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/number/:number' element={<Number />} />
          {/*
            <Route path='/hello/:word' element={<Hello />} />
            <Route path='/color/:word/:color' element={<Color />} />
          */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
