import React from "react";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import Home from './components/Home'
import PizzaForm from './components/PizzaForm'

const App = () => {
//set State

  return (
    <Router>
      <h1>Lambda Eats</h1>
      <nav>
        <link to="/">Home</link>
        <link to="/p">Order Now</link>
      </nav>
      <p>Makin' Pizza that's Exponentially Delicious</p>
    </Router>

    <Switch>
      <Route>

      </Route>

      <Route path="/">
        <Home>
      </Route>
    </Switch>
  );
};
export default App;
