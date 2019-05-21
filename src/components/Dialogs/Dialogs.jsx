import React, {Component} from 'react'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import Classes from './Dialogs.module.css'

class Dialogs extends Component {
    render() {
        let dialogData = [
            {
                id: 1,
                userName: 'userName 1'
            },
            {
                id: 2,
                userName: 'userName 2'
            }
        ];

        let messageData = [
            {
                text: 'text 1 text 1 text 1',
                likes: '1'
            },
            {
                text: 'text 2 text 2 text 2',
                likes: '2'
            }
        ];

        let dialogElement = dialogData.map((dialog) => <DialogItem id={dialog.id} name={dialog.userName}/>);

        let messageElement = messageData.map((message) => <Message text={message.text} likes={message.likes}/>);

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