import React from 'react'
import styles from './DialogItem.module.css'
import {NavLink} from "react-router-dom"

let DialogItem = (props) => {
    return (
        <NavLink to={"/dialog/" + props.id} className={styles.item} activeClassName={styles.active}>{props.name}</NavLink>
    )
};

export default DialogItem;