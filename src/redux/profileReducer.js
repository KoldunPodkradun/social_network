const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                text: state.newPostText,
                likes: 0
            };
            state.posts.unshift(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.updatePostText;
            return state;
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