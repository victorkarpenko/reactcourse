import React from 'react';
import c from './Login.module.css';
import {reduxForm, InjectedFormProps} from "redux-form";
import {Field} from "redux-form";
import {Button, Checkbox, Input, LoginDataType} from "../common/FormsControls/FormFields";
import {emailValidation, requiredField} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";
import classes from '../common/FormsControls/FormControls.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {login} from "../../redux/auth-reducer";

type LoginFormProps = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginDataType, LoginFormProps> & LoginFormProps> = ({handleSubmit, error, captchaUrl}) => {

    return (
        <form onSubmit={handleSubmit} className={c.loginForm}>
            <Field component={Input} validate={emailValidation} name={'email'} type="text" placeholder="Login"/>
            <Field component={Input} validate={requiredField} type={"password"} placeholder={"Password"}
                   name={'password'}/>
            <Field id={'rememberMe'} component={Checkbox} name={'rememberMe'} label={'Remember me'}/>
            {
                error && <div className={classes.helpBlock + ' ' + classes.hasError}>{error}</div>
            }
            {
                captchaUrl && <><img src={captchaUrl} alt=""/> <Field validate={requiredField} component={Input}
                                                                      type="text" name={'captcha'}
                                                                      placeholder={'Enter symbols from email'}/></>
            }
            <Button label={'Login'}/>
        </form>
    )
};

const ReduxLoginForm = reduxForm<LoginDataType, LoginFormProps>({form: 'login'})(LoginForm);

const Login: React.FC = (props) => {

    const captchaUrl = useSelector((state: AppStateType) => (state.auth.captchaUrl));
    const isAuth = useSelector((state: AppStateType) => (state.auth.isAuth));

    const dispatch = useDispatch();

    const onSubmit = (formData: LoginDataType) => {
        dispatch(login(formData));
    };

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    } else {
        return (
            <div className={c.loginPage}>
                <h1>Login</h1>
                <ReduxLoginForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
            </div>
        )
    }
};

export default Login;