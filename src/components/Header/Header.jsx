import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

let Header = (props) => {
    return (
        <div className={styles.header}>
            <img className={styles.logo} src="https://cs8.pikabu.ru/post_img/big/2016/07/04/10/146764992311896341.jpg" alt="logo"/>
            <div className={styles.login}>
                {props.isAuth ? <div>{props.login} <div onClick={props.logout} className={styles.logout}>logout</div></div> : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </div>
    )
};

export default Header;