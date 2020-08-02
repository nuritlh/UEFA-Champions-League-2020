import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Teams from './components/Teams';
import Team from './components/Team';
import NotFoundPage from './components/NotFoundPage'

const App = () => (
  <Router>
    <Switch>
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
      <Route path='*' exact={true} component={NotFoundPage} />
    </Switch>
  </Router>
);

export default App;