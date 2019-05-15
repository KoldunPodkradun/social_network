import React, {Component} from 'react'
import Classes from './Sidebar.module.css'
import {NavLink} from "react-router-dom";

class Sidebar extends Component {
    render() {
        return (
            <nav className={Classes.sidebar}>
                <ul>
                    <li className={Classes.item}><NavLink activeClassName={Classes.active} to="/profile">Profil</NavLink></li>
                    <li className={Classes.item}><NavLink activeClassName={Classes.active} to="/dialogs">Message</NavLink></li>
                    <li className={Classes.item}><NavLink activeClassName={Classes.active} to="/news">News</NavLink></li>
                    <li className={Classes.item}><NavLink activeClassName={Classes.active} to="#">Music</NavLink></li>
                    <li className={Classes.item}><NavLink activeClassName={Classes.active} to="#">Settings</NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default Sidebar