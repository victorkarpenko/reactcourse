import React from 'react';
import c from "./Users.module.css";
import avatar from "../../assets/images/avatar.png";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pagesNumbers = [];
    for (let i=1; i<=pagesCount; i++){
        pagesNumbers.push(i);
    }

    return (
        <>
            <div className={c.pagination}>
                {pagesNumbers.map(p => <span onClick={() => {props.onPageChanged(p)}} className={props.currentPage===p ? c.pagination__link_active + ' ' + c.pagination__link : c.pagination__link}>{p}</span> )}
            </div>
            <div className={c.users}>
                {
                    props.users.map(u => <div className={c.user} key={u.id}>
                        <div className={c.user__left}>
                            <img className={c.user__avatar} src={u.photos.small !== null ? u.photos.small : avatar} alt=""/>
                            {u.followed ?  <button onClick={()=>{props.unfollow(u.id)}} className={c.user__button}>Unfollow</button> :  <button onClick={()=>{props.follow(u.id)}} className={c.user__button}>Follow</button>}
                        </div>
                        <div className={c.user__center}>
                            <div className={c.user__fullname}>{u.name}</div>
                            <div className={c.user__status}>{u.status}</div>
                        </div>
                        <div className={c.user__right}>
                            {/*u.location.country}, {u.location.city*/}
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default Users;