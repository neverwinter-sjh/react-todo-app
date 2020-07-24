import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/css/index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from 'modules/index';

const store = createStore(
  rootReducer,
  composeWithDevTools()
);

ReactDOM.render(  
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);