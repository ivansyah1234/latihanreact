import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Loogin from './components/Loogin';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Perkara from './components/Perkara';
import Penyelesaian from './components/Penyelesaian'
import Rekapitulasi from './components/Rekapitulasi'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loogin />} />
        <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Perkara" element={<Perkara />} />
        <Route path="/Penyelesaian" element={<Penyelesaian />} />
        <Route path="/Rekapitulasi" element={<Rekapitulasi />} />
      </Routes>
    </Router>
    
    
  );
}

export default App;