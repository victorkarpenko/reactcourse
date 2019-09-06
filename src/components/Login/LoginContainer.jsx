import {connect} from "react-redux";
import Login from "./Login";
import {login} from "../../redux/auth-reducer";

let mapStateToProps = (state) =>{
    return {
        isAuth: state.auth.isAuth
    }
};

const LoginContainer = connect(mapStateToProps, {login})(Login);

export default LoginContainer;