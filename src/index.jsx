import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import addPost from './redux/state';
import state from './redux/state';

render(<App state={state} addPost={addPost}/>, document.getElementById('root'))