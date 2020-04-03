import React from 'react';
import c from './Login.module.css';
import {reduxForm, InjectedFormProps} from "redux-form";
import {Field} from "redux-form";
import {Button, Checkbox, Input, LoginDataType} from "../common/FormsControls/FormFields";
import {emailValidation, requiredField} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";
import classes from '../common/FormsControls/FormControls.module.css'
import {DispatchPropsTypeLogin, PropsTypeLogin} from "./LoginContainer";

type LoginFormProps = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginDataType, LoginFormProps> & LoginFormProps> = ({handleSubmit, error, captchaUrl}) => {

    return(
        <form onSubmit={handleSubmit} className={c.loginForm}>
            <Field component={Input} validate={emailValidation} name={'email'} type="text" placeholder="Login" />
            <Field component={Input} validate={requiredField} type={"password"} placeholder={"Password"} name={'password'}/>
            <Field id={'rememberMe'} component={Checkbox} name={'rememberMe'} label={'Remember me'}/>
            {
                error && <div className={classes.helpBlock + ' ' + classes.hasError}>{error}</div>
            }
            {
                captchaUrl && <><img src={captchaUrl} alt=""/>   <Field validate={requiredField} component={Input} type="text" name={'captcha'} placeholder={'Enter symbols from email'}/></>
            }
            <Button label={'Login'}/>
        </form>
    )
};

const ReduxLoginForm = reduxForm<LoginDataType, LoginFormProps>({form: 'login'})(LoginForm);


const Login: React.FC<PropsTypeLogin & DispatchPropsTypeLogin> = (props) => {
    const onSubmit = (formData: LoginDataType) => {
        props.login(formData);
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    } else {
    return(
        <div className={c.loginPage}>
           <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
    }
};

export default Login;