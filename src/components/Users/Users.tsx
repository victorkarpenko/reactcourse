import React, {useEffect} from 'react';
import c from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import {User} from "./User";
import {UsersSearchForm} from "./UsersSearchForm";
import {actions, FilterType, follow, requestUsers, unfollow} from "../../redux/users-reducer";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getUsers,
    getUsersFilter,
    getUsersTotalCount
} from "../../redux/users-selectors";


const Users: React.FC = (props) => {
    const totalUserCount = useSelector(getUsersTotalCount);
    const currentPage = useSelector(getCurrentPage);
    const pageSize = useSelector(getPageSize);
    const filter = useSelector(getUsersFilter);
    const users = useSelector(getUsers);
    const followingInProgress = useSelector(getFollowingInProgress);

    const dispatch = useDispatch();

    const onPageChanged = (pageNumber: number) => {

        dispatch(actions.setCurrentPage(pageNumber));
        dispatch(requestUsers(pageNumber, pageSize, filter));
    };

    const onFilterChange = (filter: FilterType) => {
        dispatch(actions.setCurrentPage(1));
        dispatch(requestUsers(1, pageSize, filter));
    };

    const onFollow = (userId: number) => {
        dispatch(follow(userId))
    };

    const onUnfollow = (userId: number) => {
        dispatch(unfollow(userId))
    };

    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize, filter));
    }, []);

    return (
        <>
            <UsersSearchForm onFilterChange={onFilterChange}/>
            <Paginator onPageChanged={onPageChanged} currentPage={currentPage} totalItemsCount={totalUserCount} pageSize={pageSize}/>
            <div className={c.users}>
                {
                    users.map(u => <User key={u.id} followingInProgress={followingInProgress} follow={onFollow} unfollow={onUnfollow} user={u} />)
                }
            </div>
        </>
    );
};

export default Users;

