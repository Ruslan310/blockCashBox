import React from 'react';
import {Provider} from "react-redux";
import {render} from 'react-dom';
import {createStore, applyMiddleware} from "redux"
import {rootReducer} from "./redux/rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import saga from "redux-saga"
import rootSaga from '../src/saga/saga'
import App from './App';
import './style/Mail.css'
import './style/reset.css'
import './style/loader.css'

const sagaMiddleware = saga()
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware),
))
sagaMiddleware.run(rootSaga)
const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)
render(app, document.getElementById('root')
);

