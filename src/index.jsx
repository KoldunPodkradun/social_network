import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import store from "./redux/state"
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = () => {
    render(
        <BrowserRouter>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);