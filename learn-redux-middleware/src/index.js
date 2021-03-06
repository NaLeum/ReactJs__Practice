import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import rootReducer, { rootSaga } from './modules';
// import myLogger from './middlewares/myLogger';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {createBrowserHistory} from 'history'

const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware({
  context:{
    history:customHistory
  }
})

const store = createStore(rootReducer,
  composeWithDevTools( applyMiddleware(sagaMiddleware,logger))
  );

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
