import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

//Pages
import Home from './pages/Home';
import Adicionar from './pages/Adicionar';
import Filme from './pages/Filme';
import Remover from './pages/Remover';

//Componets
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      
      <h1>Cinegram</h1>

      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="Filme" element={<Filme/>} />
          <Route path="Adicionar" element={<Adicionar/>} />
          <Route path="Remover" element={<Remover/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
