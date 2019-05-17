import React from 'react'
import {render} from 'react-dom'
import App from './components/App'

let dialogData = [
    {
        id: 1,
        userName: 'userName 1'
    },
    {
        id: 2,
        userName: 'userName 2'
    },
];

let messageData = [
    {
        text: 'text 1 text 1 text 1',
        likes: '1'
    },
    {
        text: 'text 2 text 2 text 2',
        likes: '2'
    },
];

render(<App dialogData={dialogData} messageData={messageData}/>, document.getElementById('root'))