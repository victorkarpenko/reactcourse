import * as React from "react";
import {connect} from "react-redux";
import {actions, requestUsers, follow, unfollow, FilterType} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getUsers, getUsersFilter,
    getUsersTotalCount
} from "../../redux/users-selectors";

import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/store";

type MapStatePropsType = {
    users: Array<UserType>,
    currentPage: number,
    pageSize: number,
    isFetching: boolean,
    totalItemsCount: number,
    followingInProgress: Array<number>,
    filter: FilterType
}

type MapDispatchPropsType = {
    requestUsers: (currentPage: number, pageSize: number, term: string) => void,
    setCurrentPage: (currentPage: number) => void,
    follow: (id: number) => void,
    unfollow: (id: number) => void
}

type OwnPropsTypes = {
    pageTitle? : string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsTypes;

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        if (this.props.users.length === 0) {
            this.props.requestUsers(currentPage, pageSize, '');
        }
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize, filter} = this.props;
        this.props.setCurrentPage(pageNumber);
        this.props.requestUsers(pageNumber, pageSize, filter.term);
    };

    onFilterChange = (filter: FilterType) => {
        const {pageSize} = this.props;
        this.props.requestUsers(1, pageSize, filter.term);
    };

    render() {

        return (
            <>
                {this.props.isFetching ?
                    <Preloader/>
                    :
                    <Users {...this.props} onFilterChange={this.onFilterChange} onPageChanged={this.onPageChanged}/>}
            </>);
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalItemsCount: getUsersTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        filter: getUsersFilter(state)
    }
};

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsTypes, AppStateType>(mapStateToProps, {
        setCurrentPage: actions.setCurrentPage,
        requestUsers,
        follow,
        unfollow
    }),
)(UsersContainer);