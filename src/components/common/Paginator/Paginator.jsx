import React, {useEffect, useState} from 'react';
import c from "./Paginator.module.css";
import cn from 'classnames';

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, linksOnPage = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pagesNumbers = [];
    for (let i = 1; i <= pagesCount; i++) {
        pagesNumbers.push(i);
    }

    let portionCount = Math.ceil(pagesCount / linksOnPage);
    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionPageNumber = (portionNumber - 1) * linksOnPage + 1;
    let rightPortionNumber = portionNumber * linksOnPage;

    useEffect(() => {
        let currentPortion = Math.ceil(currentPage / linksOnPage);
        setPortionNumber(currentPortion);
    }, [currentPage, linksOnPage]);

    return (
        <div className={c.pagination}>
            {
                portionNumber > 1 && <button onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }} className={c.pagination__btn}>Prev</button>}
            {
                pagesNumbers.filter(p => p >= leftPortionPageNumber && p <= rightPortionNumber).map(
                    p => (<span key={p} onClick={() => {
                        onPageChanged(p)
                    }}
                                className={cn({[c.pagination__link_active]: currentPage === p}, c.pagination__link)}>{p}</span>))
            }

            {
                portionCount > portionNumber && <button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }} className={c.pagination__btn}>Next</button>
            }
        </div>
    );
};

export default Paginator;