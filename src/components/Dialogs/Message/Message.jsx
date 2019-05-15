import React, {Component} from 'react'
import Classes from './Message.module.css'

class Message extends Component {
    render() {
        return (
            <div className={Classes.message}>{this.props.text}</div>
        )
    }
}

export default Message