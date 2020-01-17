import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import styles from './Dialogs.module.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls";
import {maxLengthCreator, required} from "../../Utilities/Validators";

const Dialogs = (props) => {
    let state = props.dialogsData;

    let dialogElement = state.dialogs.map((d) => <DialogItem key={d.id} id={d.id} name={d.userName}/>);
    let messageElement = state.messages.map((m) => <Message key={m.id} id={m.id} text={m.text} likes={m.likes}/>);

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageText);
    };

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialog}>
                {dialogElement}
            </div>
            <div className={styles.messages}>
                {messageElement}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
};

const maxLength10 = maxLengthCreator(10);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.add}>
            <Field className={styles.dialogInput} component={Input} validate={[required, maxLength10]} name={'newMessageText'} placeholder={'Enter you message'}/>
            <button className={styles.btn}>Add</button>
        </form>
    )
};

const AddMessageFormRedux = reduxForm({
    form: 'DialogAddMessageForm'
})(AddMessageForm);

export default Dialogs;