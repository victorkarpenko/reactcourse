import React from 'react';
import c from "./Paginator.module.css";

let Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pagesNumbers = [];
    for (let i=1; i<=pagesCount; i++){
        pagesNumbers.push(i);
    }
    return (
            <div className={c.pagination}>
                {pagesNumbers.map(p => (<span key={p} onClick={() => {props.onPageChanged(p)}}
                                              className={props.currentPage===p ? c.pagination__link_active + ' ' +
                                                  c.pagination__link : c.pagination__link}>{p}</span>) )}
            </div>
    );
};

export default Paginator;