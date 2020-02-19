import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './Sidebar.module.css';

let Sidebar = () => {
    return (
        <nav className={styles.sidebar}>
            <ul>
                <li className={styles.item}><NavLink activeClassName={styles.active} to="/profile">Profile</NavLink>
                </li>
                <li className={styles.item}><NavLink activeClassName={styles.active} to="/dialogs">Message</NavLink>
                </li>
                <li className={styles.item}><NavLink activeClassName={styles.active} to="/users">Users</NavLink>
                </li>
                <li className={styles.item}><NavLink activeClassName={styles.active} to="/news">News</NavLink></li>
                <li className={styles.item}><NavLink activeClassName={styles.active} to="#">Music</NavLink></li>
                <li className={styles.item}><NavLink activeClassName={styles.active} to="#">Settings</NavLink></li>
            </ul>
        </nav>
    )
};

export default Sidebar;