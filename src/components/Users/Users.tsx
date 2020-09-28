import React from 'react';
import c from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import {User} from "./User";
import {UserType} from '../../types/types';
import {UsersSearchForm} from "./UsersSearchForm";
import {FilterType} from "../../redux/users-reducer";

type PropsType = {
    currentPage: number,
    totalItemsCount: number,
    pageSize: number,
    users: Array<UserType>,
    followingInProgress: Array<number>,
    onPageChanged: (page:number) => void,
    onFilterChange: (filter: FilterType) => void,
    follow: (id: number) => void,
    unfollow: (id: number) => void
}

const Users: React.FC<PropsType> = (props) => {
    return (
        <>
            <UsersSearchForm onFilterChange={props.onFilterChange}/>
            <Paginator onPageChanged={props.onPageChanged} currentPage={props.currentPage} totalItemsCount={props.totalItemsCount} pageSize={props.pageSize}/>
            <div className={c.users}>
                {
                    props.users.map(u => <User key={u.id} followingInProgress={props.followingInProgress} follow={props.follow} unfollow={props.unfollow} user={u} />)
                }
            </div>
        </>
    );
};

export default Users;

