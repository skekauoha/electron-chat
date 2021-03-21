import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import chatReducer from '../js/reducers/chats';
import authReducer from '../js/reducers/auth';

export default function configureStore() {
  const middlewares = [thunkMiddleware];

  const store = createStore(
    combineReducers({
      chats: chatReducer,
      auth: authReducer,
    }),
    applyMiddleware(...middlewares)
  );

  return store;
}
