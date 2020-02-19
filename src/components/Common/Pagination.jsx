import React from 'react';
import Style from "../Common/Pagination.module.css";

let Pagination = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <ul className={Style.pagination}>
            {pages.map(p => {
                return <li className={currentPage === p && Style.selected}
                           onClick={() => {onPageChanged(p);}}>{p}</li>
            })}
        </ul>
    </div>
};

export default Pagination;