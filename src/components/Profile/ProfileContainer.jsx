import * as React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId= this.props.match.params.userId ? this.props.match.params.userId : this.props.authUserID;
        if(userId){
            this.props.getProfile(userId);
            this.props.getStatus(userId);
        } else{
            this.props.history.push('/login');
        }
    }

    /* todo */
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.authUserID !== this.props.authUserID) {
            let userId= this.props.match.params.userId ? this.props.match.params.userId : this.props.authUserID;
            this.props.getProfile(userId);
            this.props.getStatus(userId);
        }
    }

    render(){

        return (
            <Profile {...this.props}/>
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
    connect(mapStateToProps, {getProfile, getStatus, updStatus}),
    withRouter,
)(ProfileContainer)