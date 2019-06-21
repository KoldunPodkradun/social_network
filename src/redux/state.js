const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        profileData: {
            posts: [
                {
                    text: 'Test',
                    likes: 'Test'
                }
            ],
            newPostText: ''
        },
        dialogsData: {
            messages: [
                {
                    text: 'test',
                    likes: '0'
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
        }
    },
    getState() {
        return this._state;
    },
    _collSubscriber() {
        console.log('State change');
    },
    subscribe(observer) {
        this._collSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                text: this._state.profileData.newPostText,
                likes: 0
            };
            this._state.profileData.posts.push(newPost);
            this._state.profileData.newPostText = '';
            this._collSubscriber();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profileData.newPostText = action.updatePostText;
            this._collSubscriber();
        }

        if (action.type === ADD_MESSAGE) {
            let newMessage = {
                text: this._state.dialogsData.newMessageText,
                likes: 0
            };
            this._state.dialogsData.messages.push(newMessage);
            this._state.dialogsData.newMessageText = '';
            this._collSubscriber();
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsData.newMessageText = action.updateMessageText;
            this._collSubscriber();
        }
    }
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
};

export const onPostChangeCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        updatePostText: text
    }
};

export const onMessageChangeCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        updateMessageText: text
    }
};

export default store;