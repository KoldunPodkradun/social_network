import React from 'react';
import Classes from './MyPosts.module.css';
import Post from './Post/Post';

let MyPosts = (props) => {
    let postElement = props.posts.map((p) => <Post key={p.id} id={p.id} text={p.text} likes={p.likes}/>);

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={Classes.my_posts}>
            <div className={Classes.add}>
                <textarea onChange={onPostChange} value={props.newPostText}/>
                <div className={Classes.btn} onClick={onAddPost}>Add</div>
            </div>
            {postElement}
        </div>
    )
};

export default MyPosts;