import React from 'react';
import Pagination from "../Common/Pagination";
import User from "./User";

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, followingInProgress, follow, unFollow, users, ...props}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <Pagination currentPage={currentPage}
                    onPageChanged={onPageChanged}
                    totalUsersCount={totalUsersCount}
                    pageSize={pageSize}/>
        {
            users.map(u =>
                <User user={u}
                      followingInProgress={followingInProgress}
                      follow={follow}
                      unFollow={unFollow}
                      key={u.id}
                />
            )
        }
    </div>
};

export default Users;