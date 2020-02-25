import React, {useState} from 'react';
import Style from "../Common/Pagination.module.css";

let Pagination = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className={Style.pagination__wrapp}>
        {portionNumber > 1 && <div className={Style.pagination__prev} onClick={() => {setPortionNumber(portionNumber - 1)}}>Prev</div>}
        <ul className={Style.pagination}>
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <li className={currentPage === p && Style.selected}
                               onClick={() => {
                                   onPageChanged(p);
                               }}>{p}</li>
                })}
        </ul>
        {portionCount > portionNumber && <div className={Style.pagination__next} onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</div>}
    </div>
};

export default Pagination;