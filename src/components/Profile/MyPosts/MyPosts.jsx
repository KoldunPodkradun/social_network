import React, {Component} from 'react'
import Classes from './MyPosts.module.css'
import Post from './Post/Post'

class MyPosts extends Component {
    render() {

        let postData = [
            {
                id: 1,
                userName: 'userName 1',
                text: 'First message',
                likes: '1'
            },
            {
                id: 2,
                userName: 'userName 2',
                text: 'Second message',
                likes: '2'
            },
            {
                id: 3,
                userName: 'userName 3',
                text: 'Third message',
                likes: '3'
            },
            {
                id: 4,
                userName: 'userName 4',
                text: 'Fourth message',
                likes: '4'
            },
        ];

        let postElement = postData.map((post) => {
            return (<Post id={post.id} id={post.userName} text={post.text} likes={post.likes}/>)
        });

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