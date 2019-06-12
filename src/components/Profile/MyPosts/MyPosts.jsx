import React, {Component} from 'react'
import Classes from './MyPosts.module.css'
import Post from './Post/Post'

class MyPosts extends Component {
    render() {

        let postElement = this.props.posts.map((post) => <Post text={post.text} likes={post.likes}/>);

        let newPostElement = React.createRef();

        let addPost = () => {
            debugger;
            let text = newPostElement.current.value;
            this.props.addPost(text);
        };

        return (
            <div className={Classes.my_posts}>
                <div className={Classes.add}>
                    <textarea ref={newPostElement}></textarea>
                    <div className={Classes.btn} onClick={addPost}>Add</div>
                </div>
                {postElement}
            </div>
        )
    }
}

export default MyPosts