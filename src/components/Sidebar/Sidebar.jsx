import React from 'react';
import Classes from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

let Sidebar = () => {
    return (
        <nav className={Classes.sidebar}>
            <ul>
                <li className={Classes.item}><NavLink activeClassName={Classes.active} to="/profile">Profile</NavLink>
                </li>
                <li className={Classes.item}><NavLink activeClassName={Classes.active} to="/dialogs">Message</NavLink>
                </li>
                <li className={Classes.item}><NavLink activeClassName={Classes.active} to="/news">News</NavLink></li>
                <li className={Classes.item}><NavLink activeClassName={Classes.active} to="#">Music</NavLink></li>
                <li className={Classes.item}><NavLink activeClassName={Classes.active} to="#">Settings</NavLink></li>
            </ul>
        </nav>
    )
};

export default Sidebar;