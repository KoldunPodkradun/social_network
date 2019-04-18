import React, {Component} from 'react'
import Classes from './Post.module.css'

class Post extends Component {
    render() {
        return (
            <div className={Classes.item}>
                <img className={Classes.avatar}
                     src='https://cs8.pikabu.ru/post_img/big/2016/07/04/10/146764992311896341.jpg'/>
                <p className={Classes.text}>{this.props.message}</p>
            </div>
        )
    }
}

export default Post