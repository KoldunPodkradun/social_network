const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-POST-TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                text: state.newMessageText,
                likes: 0
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.updateMessageText;
            return state;
        default:
            return state;
    }
};

export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE}
};

export const onMessageChangeCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        updateMessageText: text
    }
};

export default dialogsReducer;