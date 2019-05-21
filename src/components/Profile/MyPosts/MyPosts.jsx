import React, {Component} from 'react'
import Classes from './MyPosts.module.css'
import Post from './Post/Post'

class MyPosts extends Component {
    render() {

        let posts = [
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
        ];

        let postElement = posts.map((post) => <Post text={post.text} likes={post.likes}/>);

        return (
            <div className={Classes.my_posts}>
                <div className={Classes.add}>
                    <textarea></textarea>
                    <div className={Classes.btn}>Add</div>
                </div>
                {postElement}
            </div>
        )
    }
}

export default MyPosts