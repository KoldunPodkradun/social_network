import React from 'react';
import Style from './Users.module.css'
import * as axios from 'axios';
import avatarDefault from '../../assets/img/logo.jpg'

let Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get(' https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            });
        }
    }

    return <div>
        {
            props.users.map(u =>
                <div key={u.id} className={Style.user}>
                    <div className={Style.item_left}>
                        <img className={Style.avatar} src={u.photos.small !== null ? u.photos.small : avatarDefault}
                             alt="avatar"/>
                        {u.followed
                            ? <div className={Style.unfollow} onClick={() => {
                                props.unFollow(u.id)
                            }}>UnFollow</div>
                            : <div className={Style.follow} onClick={() => {
                                props.follow(u.id)
                            }}>Follow</div>
                        }
                    </div>
                    <div className={Style.item_right}>
                        <div className={Style.name}>{u.name}</div>
                    </div>
                </div>)
        }
    </div>
};

export default Users;