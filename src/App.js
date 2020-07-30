import React from "react";
import Teams from './components/Teams';
import Team from './components/Team';
import { Router, Route } from 'react-router-dom';
import { history } from './history';

const App = () => (
  <Router history={history}>
    <Route
      exact
      path="/"
      render={() => (<Teams />)}
    />
    <Route
      exact
      path="/teams"
      render={() => (<Teams />)}
    />
    <Route
      exact
      path="/teams/:id"
      render={(match) => (<Team match={match}/>)}
    />
  </Router>
);

export default App;