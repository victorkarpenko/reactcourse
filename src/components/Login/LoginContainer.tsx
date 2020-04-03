import {connect} from "react-redux";
import Login from "./Login";
import {login} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/store"
import {LoginDataType} from "../common/FormsControls/FormFields";
export type PropsTypeLogin = {
    isAuth: boolean
    captchaUrl: null | string
}

export type DispatchPropsTypeLogin = {
    login: (userData: LoginDataType) => void
}

const mapStateToProps = (state: AppStateType): PropsTypeLogin =>{
    return {
        isAuth: state.auth.isAuth,
        captchaUrl : state.auth.captchaUrl
    }
};

const LoginContainer = connect<PropsTypeLogin, DispatchPropsTypeLogin, {}, AppStateType>(mapStateToProps, {login})(Login);

export default LoginContainer;