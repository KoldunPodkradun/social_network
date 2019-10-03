import React from 'react';
import Style from "./Users.module.css";
import avatarDefault from "../../assets/img/logo.jpg";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            <ul className={Style.pagination}>
                {pages.map(p => {
                    return <li className={props.currentPage === p && Style.selected}
                               onClick={() => {
                                   props.onPageChanged(p);
                               }}>{p}</li>
                })}
            </ul>
        </div>
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