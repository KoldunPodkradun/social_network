const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    messages: [
        {
            id: 'message_1',
            text: 'test',
            likes: 1
        }
    ],
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
        case ADD_MESSAGE:
            let body = action.newMessageText;
            return {
                ...state,
                messages: [...state.messages, {id: '1', text: body, likes: 0}]
            };
        default:
            return state;
    }
};

export const addMessageActionCreator = (newMessageText) => ({type: ADD_MESSAGE, newMessageText});

export default dialogsReducer;