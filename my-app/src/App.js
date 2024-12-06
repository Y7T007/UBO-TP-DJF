import logo from './logo.svg';
import './App.css';
import ListEtudiant from './Components/ListEtudiant';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<ListEtudiant />} />
    </Routes>
  </Router>
  );
}

export default App;
