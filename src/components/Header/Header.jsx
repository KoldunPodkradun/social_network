import React from 'react';
import Classes from './Header.module.css';

let Header = () => {
    return (
        <div className={Classes.header}>
            <img className={Classes.logo} src="https://cs8.pikabu.ru/post_img/big/2016/07/04/10/146764992311896341.jpg" alt="logo"/>
        </div>
    )
};

export default Header;