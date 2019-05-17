import React, {Component} from 'react'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import Classes from './Dialogs.module.css'

class Dialogs extends Component {
    render() {

        let dialogElement = this.props.dialogData.map((dialog) => {
            return (<DialogItem id={dialog.id} name={dialog.userName}/>)
        });

        let messageElement = this.props.messageData.map((message) => {
            return (<Message text={message.text} likes={message.like}/>)
        });

        return (
            <div className={Classes.dialogs}>
                <div className={Classes.dialog}>
                    {dialogElement}
                </div>
                <div className={Classes.messages}>
                    {messageElement}
                </div>
            </div>
        )
    }
}

export default Dialogs