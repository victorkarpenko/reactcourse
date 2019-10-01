import React from 'react';
import c from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import {User} from "./User";

let Users = (props) => {
    return (
        <>
            <Paginator onPageChanged={props.onPageChanged} currentPage={props.currentPage} totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}/>
            <div className={c.users}>
                {
                    props.users.map(u => <User key={u.id} followingInProgress={props.followingInProgress} follow={props.follow} unfollow={props.unfollow} user={u} />)
                }
            </div>
        </>
    );
};

export default Users;