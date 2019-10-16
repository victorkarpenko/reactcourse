import * as React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, savePhoto, saveProfileData, updStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component{

    refreshProfile(){
        let userId= this.props.match.params.userId ? this.props.match.params.userId : this.props.authUserID;
        if(userId){
            this.props.getProfile(userId);
            this.props.getStatus(userId);
        } else{
            this.props.history.push('/login');
        }
    }

    componentDidMount() {
       this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId !== prevProps.match.params.userId ){
            this.refreshProfile();
        }
    }

    render(){

        return (
            <Profile {...this.props} isOwner={!this.props.match.params.userId}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        userStatus: state.profilePage.userStatus,
        authUserID: state.auth.id
    }
};


export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updStatus, savePhoto, saveProfileData}),
    withRouter,
)(ProfileContainer)