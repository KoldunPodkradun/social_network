const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {
            id: 'post_1',
            text: 'Test',
            likes: 1
        }
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.updatePostText
            };
        }
        case ADD_POST:
            let newPostText = state.newPostText;
            let newPost = {
                id: 'post_2',
                text: newPostText,
                likes: 0
            };
            return {
                ...state,
                newPostText: '',
                posts: [newPost, ...state.posts]
            };
        default:
            return state;
    }
};

export const addPostActionCreator = () => {
    return {type: ADD_POST}
};

export const onPostChangeCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        updatePostText: text
    }
};

export default profileReducer;