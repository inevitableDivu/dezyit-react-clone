import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './components/About';
import Blog from './components/Blog';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Sprint from './components/Sprint';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/' component={Sprint} />
      <Route exact path='/' component={Products} />
      <About />
      <Blog />
    </Router>
  );
}

export default App;
