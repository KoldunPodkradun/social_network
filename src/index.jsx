import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
let posts = [
    {
        text: 'First message',
        likes: '1'
    },
    {
        text: 'Second message',
        likes: '2'
    },
    {
        text: 'Third message',
        likes: '3'
    },
    {
        text: 'Fourth message',
        likes: '4'
    }
];

let dialogs = [
    {
        id: 1,
        userName: 'userName 1'
    },
    {
        id: 2,
        userName: 'userName 2'
    },
    {
        id: 3,
        userName: 'userName 3'
    }
];

let messages = [
    {
        text: 'text 1 text 1 text 1',
        likes: '1'
    },
    {
        text: 'text 2 text 2 text 2',
        likes: '2'
    }
];

render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'))

// test