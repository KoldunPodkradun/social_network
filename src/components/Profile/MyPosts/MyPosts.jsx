import React, {Component} from 'react'
import Classes from './MyPosts.module.css'
import Post from './Post/Post'
import {addPostActionCreator, onPostChangeCreator} from "../../../redux/state";

class MyPosts extends Component {
    render() {

        let postElement = this.props.posts.map((post) => <Post text={post.text} likes={post.likes}/>);

        let newPostElement = React.createRef();


        let addPost = () => {
            this.props.dispatch(addPostActionCreator());
        };

        let onPostChange = () => {
            let text = newPostElement.current.value;
            this.props.dispatch(onPostChangeCreator(text));
        };

        return (
            <div className={Classes.my_posts}>
                <div className={Classes.add}>
                    <textarea onChange={onPostChange} ref={newPostElement} value={this.props.newPostText}/>
                    <div className={Classes.btn} onClick={addPost}>Add</div>
                </div>
                {postElement}
            </div>
        )
    }
}

export default MyPosts