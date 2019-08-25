import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
// import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/rootReducer'
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/index";
// import loadCats from "./reducers/loadCats";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);







render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)




