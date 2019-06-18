import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import state, {subscribe} from "./redux/state"
import {addPost} from './redux/state';
import {addMessage} from './redux/state';
import {updateNewPostText} from './redux/state';
import {updateNewMessageText} from './redux/state';
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
    render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                addMessage={addMessage}
                updateNewPostText={updateNewPostText}
                updateNewMessageText={updateNewMessageText}
            />
        </BrowserRouter>, document.getElementById('root')
    );
};

rerenderEntireTree(state);
subscribe(rerenderEntireTree);