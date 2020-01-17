import React from 'react';
import styles from './Message.module.css';

let Message = (props) => {
    return (
        <div className={styles.message}>{props.text}</div>
    )
};

export default Message;