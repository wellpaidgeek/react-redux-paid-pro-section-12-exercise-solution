import 'babel-regenerator-runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import reducer from './reducers';
import { searchSuccess } from './actions/search';
import App from './components/app';
import { createLogger } from 'redux-logger';
import searchSaga from './sagas/search';
import createSagaMiddleware from 'redux-saga';

const sagas = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(createLogger(), sagas)
);

sagas.run(searchSaga);

const results = [
    {
        full: 'https://media3.giphy.com/media/g5KhmX06Q0XBu/giphy.gif',
        thumbnail: 'https://media3.giphy.com/media/g5KhmX06Q0XBu/100_s.gif',
    },
    {
        full: 'https://media2.giphy.com/media/uw3fTCTNMbXAk/giphy.gif',
        thumbnail: 'https://media2.giphy.com/media/uw3fTCTNMbXAk/100_s.gif',
    },
];


ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('app')
);