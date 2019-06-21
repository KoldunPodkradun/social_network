import React, {Component} from 'react'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import Classes from './Dialogs.module.css'
import {addMessageActionCreator, onMessageChangeCreator} from "../../redux/state";

class Dialogs extends Component {
    render() {

        let dialogElement = this.props.dialogsData.dialogs.map((dialog) => <DialogItem id={dialog.id} name={dialog.userName}/>);
        let messageElement = this.props.dialogsData.messages.map((message) => <Message text={message.text} likes={message.likes}/>);

        let newMessageElement = React.createRef();

        let addMessage = () => {
            this.props.dispatch(addMessageActionCreator());
        };

        let onMessageChange = () => {
            let text = newMessageElement.current.value;
            this.props.dispatch(onMessageChangeCreator(text));
        };

        return (
            <div className={Classes.dialogs}>
                <div className={Classes.dialog}>
                    {dialogElement}
                </div>
                <div className={Classes.messages}>
                    <div>{messageElement}</div>
                    <div className={Classes.add}>
                        <textarea onChange={onMessageChange} ref={newMessageElement}
                                  value={this.props.dialogsData.newMessageText}/>
                        <div onClick={addMessage} className={Classes.btn}>Add</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dialogs