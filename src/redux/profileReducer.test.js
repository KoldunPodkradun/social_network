import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";

let state = {
    posts: [
        {id: 1, text: 'Test_1', likes: 9},
        {id: 2, text: 'Test_2', likes: 10},
        {id: 3, text: 'Test_3', likes: 5},
    ]
};

it('length post should be incremented', () => {
    let action = addPostActionCreator('Test_4');
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4);
});


it('Message of new post shout be correct', () => {
    let action = addPostActionCreator('Test_4');
    let newState = profileReducer(state, action);
    expect(newState.posts[3].text).toBe('Test_4');
});

it('After deleting length of messages should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
});
