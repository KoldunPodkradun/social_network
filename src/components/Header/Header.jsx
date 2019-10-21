import React from 'react';
import Classes from './Header.module.css';
import {NavLink} from "react-router-dom";

let Header = (props) => {
    return (
        <div className={Classes.header}>
            <img className={Classes.logo} src="https://cs8.pikabu.ru/post_img/big/2016/07/04/10/146764992311896341.jpg" alt="logo"/>
            <div className={Classes.login}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </div>
    )
};

export default Header;