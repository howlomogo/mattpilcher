import React from 'react';
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const windowGlobal = typeof window !== 'undefined' && window

const devtools =
process.env.NODE_ENV === 'development' && windowGlobal.devToolsExtension
  ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
  : f => f;

const createStore = () => reduxCreateStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    devtools
  )
)

export default ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
);
