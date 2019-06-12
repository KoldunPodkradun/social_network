let state = {
    profileData: {
        posts: [
            {
                text: 'First message',
                likes: '1'
            },
            {
                text: 'Second message',
                likes: '2'
            },
            {
                text: 'Third message',
                likes: '3'
            },
            {
                text: 'Fourth message',
                likes: '4'
            }
        ]
    },
    dialogsData: {
        messages: [
            {
                text: 'text 1',
                likes: '1'
            },
            {
                text: 'text 2',
                likes: '2'
            }
        ],
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
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 1,
        text: postMessage,
        likes: 0
    };
    state.posts.push(newPost);
};

export default state;