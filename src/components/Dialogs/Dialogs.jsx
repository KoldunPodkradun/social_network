import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Classes from './Dialogs.module.css';

const Dialogs = (props) => {
    let state = props.dialogsData;
    let dialogElement = state.dialogs.map((d) => <DialogItem id={d.id} name={d.userName}/>);
    let messageElement = state.messages.map((m) => <Message text={m.text} likes={m.likes}/>);


    let addMessage = () => {
        props.addMessage();
    };
    let onMessageChange = (e) => {
        let text = e.target.value;
        props.onMessageChange(text);
    };

    return (
        <div className={Classes.dialogs}>
            <div className={Classes.dialog}>
                {dialogElement}
            </div>
            <div className={Classes.messages}>
                <div>{messageElement}</div>
                <div className={Classes.add}>
                    <textarea onChange={onMessageChange} value={state.newMessageText}/>
                    <div onClick={addMessage} className={Classes.btn}>Add</div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;