import React from 'react';
import Style from './Users.module.css'

let Users = (props) => {
    return <div>
        {
            props.users.map(u =>
                <div key={u.id} className={Style.users_item}>
                    <div className={Style.users_item_head}>
                        <img className={Style.avatar} src={u.avatar} alt="alt"/>
                        <div>
                            {u.followed
                                ? <div className={Style.unfollow} onClick={() => {props.unFollow(u.id)}}>UnFollow</div>
                                : <div className={Style.follow} onClick={() => {props.follow(u.id)}}>Follow</div>
                            }
                        </div>
                    </div>
                    <div className={Style.users_item_body}>
                        <div>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </div>
                    </div>
                </div>)
        }
    </div>
};

export default Users;