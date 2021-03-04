import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import HomeView from './views/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content-wrapper">
        <Switch>
          <Route path="/settings">
            <h1>Settings</h1>
          </Route>
          <Route path="/login">
            <h1>login</h1>
          </Route>
          <Route path="/register">
            <h1>register</h1>
          </Route>
          <Route path="/">
            <HomeView />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
