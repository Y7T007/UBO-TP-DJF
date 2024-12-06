import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import ListEtudiant from './Components/ListEtudiant';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<ListEtudiant />} />
    </Routes>
  </Router>
=======
import EtudiantDetail from './Components/EtudiantDetail';

function App() {
  return (
    <div className="App">
      <EtudiantDetail/>
    </div>
>>>>>>> cecb145 (Styler)
  );
}

export default App;
