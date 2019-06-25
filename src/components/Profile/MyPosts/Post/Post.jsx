import React from 'react';
import Classes from './Post.module.css';

let Post = (props) => {
    return (
        <div className={Classes.item}>
            <img className={Classes.avatar}
                 src='https://cs8.pikabu.ru/post_img/big/2016/07/04/10/146764992311896341.jpg' alt="#"/>
            <p className={Classes.text}>{props.text}</p>
        </div>
    )
};

export default Post;