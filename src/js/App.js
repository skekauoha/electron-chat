import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listenToAuthChanges } from './actions/auth';
import StoreProvider from '../store/StoreProvider';

import Home from './views/Home';
import Navbar from './components/Navbar';
import Welcome from './views/Welcome';
import Settings from './views/Settings';
import Chat from './views/Chat';
import Loader from './components/shared/Loader';

function AuthRoute({ children, ...rest }) {
  console.log('test');
  const user = useSelector(({ auth }) => auth.user);
  const onlyChild = React.Children.only(children);

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          React.cloneElement(onlyChild, { ...rest, ...props })
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}

const ContentWrapper = ({ children }) => (
  <div className="content-wrapper">{children}</div>
);

function ChatApp() {
  const dispatch = useDispatch();
  const isChecking = useSelector(({ auth }) => auth.isChecking);

  useEffect(() => {
    dispatch(listenToAuthChanges());
  }, [dispatch]);

  if (isChecking) {
    return <Loader />;
  }

  return (
    <Router>
      <Navbar />
      <ContentWrapper>
        <Switch>
          <Route path="/" exact>
            <Welcome />
          </Route>
          <AuthRoute path="/home">
            <Home />
          </AuthRoute>
          <AuthRoute path="/chat/:id">
            <Chat />
          </AuthRoute>
          <AuthRoute path="/settings">
            <Settings />
          </AuthRoute>
        </Switch>
      </ContentWrapper>
    </Router>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <ChatApp />
    </StoreProvider>
  );
}
