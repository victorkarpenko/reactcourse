import {connect} from "react-redux";
import Login from "./Login";
import {login} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/store";
import {LoginDataType} from "../../types/types";

type PropsType = {
    isAuth: boolean,
    captchaUrl: null | string
}

type DispatchPropsType = {
    login: (userData: LoginDataType) => void
}

const mapStateToProps = (state: AppStateType): PropsType =>{
    return {
        isAuth: state.auth.isAuth,
        captchaUrl : state.auth.captchaUrl
    }
};

const LoginContainer = connect<PropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {login})(Login);

export default LoginContainer;