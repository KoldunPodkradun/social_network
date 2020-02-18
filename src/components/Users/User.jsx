import React from 'react';
import Style from "./User.module.css";
import avatarDefault from "../../assets/img/logo.jpg";
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, follow, unFollow}) => {
    return (
        <div className={Style.user}>
            <div className={Style.item_left}>
                <NavLink to={'/profile/' + user.id}>
                    <img className={Style.avatar}
                         src={user.photos.small !== null ? user.photos.small : avatarDefault}
                         alt="avatar"/>
                </NavLink>
                {user.followed
                    ? <button className={Style.unfollow}
                              disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  unFollow(user.id)
                              }}>UnFollow</button>
                    : <button className={Style.follow}
                              disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  follow(user.id)
                              }}>Follow</button>
                }
            </div>
            <div className={Style.item_right}>
                <div className={Style.name}>{user.name}</div>
            </div>
        </div>
    );
};

export default User;