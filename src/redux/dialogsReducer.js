const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    messages: [
        {
            text: 'test',
            likes: 1
        }
    ],
    newMessageText: '',
    dialogs: [
        {
            id: 1,
            userName: 'User 1'
        },
        {
            id: 2,
            userName: 'User 2'
        },
        {
            id: 3,
            userName: 'User 3'
        }
    ]
};

const dialogsReducer = (state = initialState, action) => {
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