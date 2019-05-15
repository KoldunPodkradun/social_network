import React, {Component} from 'react'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import Classes from './Dialogs.module.css'

class Dialogs extends Component {
    render() {

        /* 1. массив id и имен пользователей с которыми ведутся диалоги*/

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

        /* 2. массив сообщений и лайков пользователей с которыми ведутся диалоги*/

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

        /* 3. Стрелочная функция преобразующая массив dialogData в компоненту DialogItem*/
        let dialogElement = dialogData.map((dialog) => {
            return (<DialogItem id={dialog.id} name={dialog.userName}/>)
        });

        /* 4. Стрелочная функция преобразующая массив messageData в компоненту Message*/
        let messageElement = messageData.map((message) => {
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