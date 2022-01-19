import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navegacion/Navbar'
import Inicio from './components/paginas/Inicio'
import Novedades from './components/paginas/Novedades'
import Ofertas from './components/paginas/Ofertas'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/welcome' element={Inicio} />
          <Route path='/novedades' element={Novedades} />
          <Route path='/ofertas' element={Ofertas} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
