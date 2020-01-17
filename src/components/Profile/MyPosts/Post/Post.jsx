import React from 'react';
import styles from './Post.module.css';

let Post = (props) => {
    return (
        <div className={styles.item}>
            <img className={styles.avatar}
                 src='https://cs8.pikabu.ru/post_img/big/2016/07/04/10/146764992311896341.jpg' alt="#"/>
            <p className={styles.text}>{props.text}</p>
        </div>
    )
};

export default Post;