import * as React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId= this.props.match.params.userId ? this.props.match.params.userId : 1514;
        this.props.getProfile(userId);
    }

    render(){
        if(!this.props.isAuth) return <Redirect to={'/login'} />;
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
       userProfile: state.profilePage.userProfile,
        isAuth: state.auth.isAuth
    }
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getProfile})(WithUrlDataContainerComponent);