import React from 'react';
import {addMessageActionCreator, onMessageChangeCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = (props) => {
//     let state = props.store.getState().dialogsData;
//
//     let addMessage = () => {
//         store.dispatch(addMessageActionCreator());
//     };
//     let onMessageChange = (text) => {
//         let action = onMessageChangeCreator(text);
//         store.dispatch(action);
//     };
//
//     return (
//         <Dialogs
//             addMessage={addMessage}
//             onMessageChange={onMessageChange}
//             dialogsData={state}/>
//     )
// };

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsData
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        onMessageChange: (text) => {
            dispatch(onMessageChangeCreator(text));
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;