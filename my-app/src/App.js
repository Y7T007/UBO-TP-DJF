import logo from './logo.svg';
import './App.css';
import ListEtudiant from './Components/ListEtudiant';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EtudiantDetail from './Components/EtudiantDetail';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<ListEtudiant />} />
      <Route path="/Detail" element={<EtudiantDetail />} />

    </Routes>
  </Router>
  );
}

export default App;
