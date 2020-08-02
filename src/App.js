import React from "react";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Teams from './components/Teams';
import Team from './components/Team';

const App = () => (
  <Router>
    <Route
      exact
      path="/"
      render={() => (<Redirect exact to="/teams" />)}
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