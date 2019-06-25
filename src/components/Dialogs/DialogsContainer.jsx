import React from 'react';
import {addMessageActionCreator, onMessageChangeCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsData;

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };
    let onMessageChange = (text) => {
        let action = onMessageChangeCreator(text);
        props.store.dispatch(action);
    };

    return (
        <Dialogs
            addMessage={addMessage}
            onMessageChange={onMessageChange}
            dialogsData={state}/>
    )
};

export default DialogsContainer;