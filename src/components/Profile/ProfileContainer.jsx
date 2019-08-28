import * as React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId= this.props.match.params.userId ? this.props.match.params.userId : 1514;
        profileAPI.getProfile(userId).then(data => {
            this.props.setUserProfile(data);
        });
    }

    render(){
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
       userProfile: state.profilePage.userProfile
    }
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);