const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    messages: [
        {
            id: 'message_1',
            text: 'test',
            likes: 1
        }
    ],
    newMessageText: '',
    dialogs: [
        {
            id: 'user_1',
            userName: 'User 1'
        },
        {
            id: 'user_2',
            userName: 'User 2'
        },
        {
            id: 'user_3',
            userName: 'User 3'
        }
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.updateMessageText
            };
        }
        case ADD_MESSAGE:
            let newMessageText = state.newMessageText;
            let newMessage = {
                id: 'message_2',
                text: newMessageText,
                likes: 0
            };
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMessage]
            };
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