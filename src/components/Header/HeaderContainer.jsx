import * as React from "react";
import {connect} from "react-redux";
import Header from "./header";
import {setAuthUserData} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
       authAPI.getMe().then(data => {
            if(data.resultCode === 0){
                let{id, login, email} = data.data;
                this.props.setAuthUserData(email, id, login);
            }
        });
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);