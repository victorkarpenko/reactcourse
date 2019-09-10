import React from 'react';
import c from './Login.module.css';
import {reduxForm} from "redux-form";
import {Field} from "redux-form";
import {Button, Checkbox, Input} from "../common/FormsControls/FormFields";
import {emailValidation, requiredField} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";
import classes from '../common/FormsControls/FormControls.module.css'


const LoginForm = (props) => {

    return(
        <form onSubmit={props.handleSubmit} className={c.loginForm}>
            <Field component={Input} validate={emailValidation} name={'email'} type="text" placeholder="Login" />
            <Field component={Input} validate={requiredField} type={"password"} placeholder={"Password"} name={'password'}/>
            <Field id={'rememberMe'} component={Checkbox} name={'rememberMe'} label={'Remember me'}/>
            {
                props.error && <div className={classes.helpBlock + ' ' + classes.hasError}>{props.error}</div>
            }
            <Button label={'Login'}/>
        </form>
    )
};


const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData);
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    } else {
    return(
        <div className={c.loginPage}>
           <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit} />
        </div>
    )
    }
};



export default Login;