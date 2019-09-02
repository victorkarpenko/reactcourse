import * as React from "react";
import {connect} from "react-redux";
import {follow, getUsersThunkCreator, setCurrentPage, unfollow} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";

class UsersContainer extends React.Component {
    componentDidMount() {

        if (this.props.users.length === 0) {
            this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
    };

    render() {

        return (
            <>
                {this.props.isFetching ?
                    <Preloader/>
                    :
                    <Users {...this.props} onPageChanged={this.onPageChanged} />}
            </>);
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

export default compose(
    connect(mapStateToProps, {
        setCurrentPage,
        getUsersThunkCreator,
        follow,
        unfollow
    }),
)(UsersContainer);