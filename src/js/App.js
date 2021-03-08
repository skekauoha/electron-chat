import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import HomeView from './views/Home';
import Navbar from './components/Navbar';
import Login from './views/Login';
import Register from './views/Register';
import Settings from './views/Settings';
import Chat from './views/Chat';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content-wrapper">
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/chat/:id">
            <Chat />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
