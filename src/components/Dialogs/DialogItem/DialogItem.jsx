import React, {Component} from 'react'
import Classes from './DialogItem.module.css'
import {NavLink} from "react-router-dom"

class DialogItem extends Component {
    render() {
        return (
            <NavLink to={"/dialog/" + this.props.id} className={Classes.item} activeClassName={Classes.active}>{this.props.name}</NavLink>
        )
    }
}

export default DialogItem