let rerenderEntireTree = () =>{
    console.log('True');
}

let state = {
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
};


// Паттерн наблюдатель
export const subscribe = (observer) => {
    rerenderEntireTree = observer;
};

// Update new post text function
// Обновление поля поста
export const updateNewPostText = (newText) => {
    state.profileData.newPostText = newText;
    rerenderEntireTree();
};

// Add post function
// Добавить новый пост
export const addPost = () => {
    let newPost = {
        text: state.profileData.newPostText,
        likes: 0
    };

    state.profileData.posts.push(newPost);
    state.profileData.newPostText = '';
    rerenderEntireTree();
};




// Update new message text function
// Обновление поля сообщения
export const updateNewMessageText = (newMessage) => {
    state.dialogsData.newMessageText = newMessage;
    rerenderEntireTree();
};

// Add message function
// Добавить новое сообщение
export const addMessage = () => {
    let newMessage = {
        text: state.dialogsData.newMessageText,
        likes: 0
    };

    state.dialogsData.messages.push(newMessage);
    state.dialogsData.newMessageText = '';
    rerenderEntireTree();
};

export default state;