import React, {Component} from 'react'
import Classes from './MyPosts.module.css'
import Post from './Post/Post'

class MyPosts extends Component {
    render() {
        return (
            <div className={Classes.my_posts}>
                <div className={Classes.add}>
                    <textarea></textarea>
                    <div className={Classes.btn}>Add</div>
                </div>
                <Post message='First message' />
                <Post message='Second message' />
            </div>
        )
    }
}

export default MyPosts