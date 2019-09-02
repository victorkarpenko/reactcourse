import * as React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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

let RedirectComp = withAuthRedirect(ProfileContainer);


let mapStateToProps = (state) => {
    return {
       userProfile: state.profilePage.userProfile,
    }
};

let WithUrlDataContainerComponent = withRouter(RedirectComp);

export default connect(mapStateToProps, {getProfile})(WithUrlDataContainerComponent);