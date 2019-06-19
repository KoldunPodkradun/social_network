import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import store from "./redux/state"
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = () => {
    render(
        <BrowserRouter>
            <App
                state={store.getState()}
                addPost={store.addPost.bind(store)}
                addMessage={store.addMessage.bind(store)}
                updateNewPostText={store.updateNewPostText.bind(store)}
                updateNewMessageText={store.updateNewMessageText.bind(store)}
            />
        </BrowserRouter>, document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);