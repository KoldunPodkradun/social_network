import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const ADD_MESSAGE = 'ADD-MESSAGE';
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
        this._state.profileData = profileReducer(this._state.profileData, action);
        this._state.dialogsData = dialogsReducer(this._state.dialogsData, action);
        this._collSubscriber(this.state);
    }
};

export default store;