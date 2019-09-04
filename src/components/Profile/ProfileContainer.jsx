import * as React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
//import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId= this.props.match.params.userId ? this.props.match.params.userId : 1514;
        this.props.getProfile(userId);
        this.props.getStatus(userId);
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
        userStatus: state.profilePage.userStatus
    }
};


export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updStatus}),
    withRouter,
   // withAuthRedirect,
)(ProfileContainer)