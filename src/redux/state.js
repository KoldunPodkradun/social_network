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
    getState(){
        return this._state;
    },
    _collSubscriber() {
        console.log('State change');
    },
    updateNewPostText(newText) {
        this._state.profileData.newPostText = newText;
        this._collSubscriber();
    },
    updateNewMessageText(newMessage) {
        this._state.dialogsData.newMessageText = newMessage;
        this._collSubscriber();
    },
    addPost() {
        let newPost = {
            text: this._state.profileData.newPostText,
            likes: 0
        };
        this._state.profileData.posts.push(newPost);
        this._state.profileData.newPostText = '';
        this._collSubscriber();
    },
    addMessage() {
        let newMessage = {
            text: this._state.dialogsData.newMessageText,
            likes: 0
        };

        this._state.dialogsData.messages.push(newMessage);
        this._state.dialogsData.newMessageText = '';
        this._collSubscriber();
    },
    subscribe(observer) {
        this._collSubscriber = observer;
    }
};

export default store;