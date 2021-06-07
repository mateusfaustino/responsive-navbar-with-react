import Header from './components/Header/index'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/index'
import About from './Pages/About/index'

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/about' component={About}/>
      </Switch>
    </Router>
  );
}

export default App;
