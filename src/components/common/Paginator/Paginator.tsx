import React, {useEffect, useState} from 'react';
import c from "./Paginator.module.css";
import cn from 'classnames';

type Props = {
    totalItemsCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (page: number) => void,
    linksOnPage?: number
}


const Paginator: React.FC<Props> = ({totalItemsCount, pageSize, currentPage, onPageChanged, linksOnPage = 10}) => {

    const pagesCount:number = Math.ceil(totalItemsCount / pageSize);
    const pagesNumbers: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pagesNumbers.push(i);
    }

    const portionCount:number = Math.ceil(pagesCount / linksOnPage);
    const [portionNumber, setPortionNumber] = useState(1);

    const leftPortionPageNumber:number = (portionNumber - 1) * linksOnPage + 1;
    const rightPortionNumber:number = portionNumber * linksOnPage;

    useEffect(() => {
        const currentPortion:number = Math.ceil(currentPage / linksOnPage);
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