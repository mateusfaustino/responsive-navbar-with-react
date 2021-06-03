import Navbar from './components/Navbar/index'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
    </Router>
  );
}

export default App;
