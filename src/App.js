import React from 'react';
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';

import AllProductsPage from './Components/AllProductsPage';
import About from './Components/About';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavComponent />
        <Switch>
          <Route path='/' exact component={About} />
          <Route path='/products' component={AllProductsPage} />
        </Switch>
      </Router>
    </div>
  );
}

const NavComponent = () => {
  return (
    <nav className="navbar">
      <li><NavLink exact activeClassName='active' to='/'>About</NavLink></li>
      <li><NavLink activeClassName='active' to='/products'>Products</NavLink></li>
    </nav>
  )
}

export default App;
