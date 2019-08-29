import * as React from "react";
import {connect} from "react-redux";
import Header from "./header";
import {checkAuth, setAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
       this.props.checkAuth();
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth:state.auth.isAuth,
        login: state.auth.login
    }
};

export default connect(mapStateToProps, {setAuthUserData, checkAuth})(HeaderContainer);