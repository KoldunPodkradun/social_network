import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {
            id: 0,
            text: 'Test',
            likes: 1
        }
    ],
    newPostText: '',
    profile: ''
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
                id: 1,
                text: newPostText,
                likes: 0
            };
            return {
                ...state,
                newPostText: '',
                posts: [newPost, ...state.posts]
            };
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

// Thunk

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
};

export const onPostChangeCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, updatePostText: text});

export default profileReducer;