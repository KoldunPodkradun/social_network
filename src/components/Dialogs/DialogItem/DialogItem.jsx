import React from 'react'
import Classes from './DialogItem.module.css'
import {NavLink} from "react-router-dom"

let DialogItem = (props) => {
    return (
        <NavLink to={"/dialog/" + props.id} className={Classes.item} activeClassName={Classes.active}>{props.name}</NavLink>
    )
};

export default DialogItem;