import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(...rootSagas);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

