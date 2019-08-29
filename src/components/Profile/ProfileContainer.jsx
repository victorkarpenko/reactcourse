import * as React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId= this.props.match.params.userId ? this.props.match.params.userId : 1514;
        this.props.getProfile(userId);
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

export default connect(mapStateToProps, {setUserProfile, getProfile})(WithUrlDataContainerComponent);