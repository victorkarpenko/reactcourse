import * as React from "react";
import {connect} from "react-redux";
import Header from "./header";
import {logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/store";

type MapStatePropsType = {
    isAuth: boolean,
    login: null | string
}

type MapDispatchPropsType = {
    logout: () => void
}


class HeaderContainer extends React.Component<MapStatePropsType & MapDispatchPropsType> {

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state: AppStateType) : MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
};

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {logout})(HeaderContainer);