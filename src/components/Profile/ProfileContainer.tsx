import * as React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, savePhoto, saveProfileData, updStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {ProfileType} from "../../types/types";
import {AppStateType} from "../../redux/store";

type MapStatePropsType = {
    userProfile: null | ProfileType,
    userStatus: string,
    authUserID: null | number,
}

type MapDispatchPropsType = {
    getProfile: (userId: number) => void,
    getStatus: (userId: number) => void,
    updStatus: (status: string) => void,
    savePhoto: (photo: string) => void,
    saveProfileData: (profileData: ProfileType) => void
}

type OwnPropsTypes = {
    match:  any
    history: any
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsTypes;

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        const userId = this.props.match.params.userId ? this.props.match.params.userId : this.props.authUserID;
        if (userId) {
            this.props.getProfile(userId);
            this.props.getStatus(userId);
        } else {
            this.props.history.push('/login');
        }
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: PropsType) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {

        return (
            <Profile {...this.props} isOwner={!this.props.match.params.userId}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        userProfile: state.profilePage.userProfile,
        userStatus: state.profilePage.userStatus,
        authUserID: state.auth.id
    }
};


export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsTypes, AppStateType>(mapStateToProps, {
        getProfile,
        getStatus,
        updStatus,
        savePhoto,
        saveProfileData
    }),
    withRouter,
)(ProfileContainer)