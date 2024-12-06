import logo from './logo.svg';
import './App.css';
import ListEtudiant from './Components/ListEtudiant';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EtudiantDetail from './Components/EtudiantDetail';
import { CreateEtudiant } from './Components/CreerEtudiant';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<ListEtudiant />} />
      <Route path="/Detail/:id" element={<EtudiantDetail />} />
      <Route path="/Creer" element={<CreateEtudiant />} />


    </Routes>
  </Router>
  );
}

export default App;
