import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Home from './components/Home';
import Contact from './components/Contact';
import Blog from './components/Blog';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      
        <Switch>
          <Route path='/' components ={Home} exact><Home /></Route>
          <Route path='/contact' components ={Contact} exact><Contact /></Route>
          <Route path='/blog' components ={Blog} exact><Blog /></Route>
          <Route path='/about' components ={About} exact><About /></Route>
        </Switch>

      </Router>
      
      
    </div>
  );
}

export default App;
