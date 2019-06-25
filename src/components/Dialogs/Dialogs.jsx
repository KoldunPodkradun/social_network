import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Classes from './Dialogs.module.css';
import {addMessageActionCreator, onMessageChangeCreator} from "../../redux/dialogsReducer";

const Dialogs = (props) => {
    let dialogElement = props.dialogsData.dialogs.map((d) => <DialogItem id={d.id} name={d.userName}/>);
    let messageElement = props.dialogsData.messages.map((m) => <Message text={m.text} likes={m.likes}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(onMessageChangeCreator(text));
    };

    return (
        <div className={Classes.dialogs}>
            <div className={Classes.dialog}>
                {dialogElement}
            </div>
            <div className={Classes.messages}>
                <div>{messageElement}</div>
                <div className={Classes.add}>
                    <textarea onChange={onMessageChange} ref={newMessageElement} value={props.dialogsData.newMessageText}/>
                    <div onClick={addMessage} className={Classes.btn}>Add</div>
                </div>
            </div>
        </div>
    )

};

export default Dialogs;