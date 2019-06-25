import React from 'react';
import Classes from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, onPostChangeCreator} from "../../../redux/profileReducer";

let MyPosts = (props) => {
    let postElement = props.posts.map((post) => <Post text={post.text} likes={post.likes}/>);
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(onPostChangeCreator(text));
    };

    return (
        <div className={Classes.my_posts}>
            <div className={Classes.add}>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <div className={Classes.btn} onClick={addPost}>Add</div>
            </div>
            {postElement}
        </div>
    )
}

export default MyPosts;