import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home.js';
import Hello from './components/Hello.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/:word' element={<Hello />} />
            <Route path='/:word/:color/:bgColor' element={<Hello />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
