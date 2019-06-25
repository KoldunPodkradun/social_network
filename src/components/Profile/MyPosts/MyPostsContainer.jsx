import React from 'react';
import {addPostActionCreator, onPostChangeCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        let action = onPostChangeCreator(text);
        props.store.dispatch(action);
    };

    return (
        <MyPosts
            addPost={addPost}
            updateNewPostText={onPostChange}
            posts={state.profileData.posts}
            newPostText={state.profileData.newPostText} />
    )
};

export default MyPostsContainer;