import React, { useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../store/index';
import { listenToAuthChanges } from './actions/auth';

import Home from './views/Home';
import Navbar from './components/Navbar';
import Welcome from './views/Welcome';
import Settings from './views/Settings';
import Chat from './views/Chat';

const store = configureStore();

const App = () => {
  useEffect(() => {
    store.dispatch(listenToAuthChanges());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="content-wrapper">
          <Switch>
            <Route path="/" exact>
              <Welcome />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/chat/:id">
              <Chat />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
