import React from 'react';
import c from './Login.module.css';
import {reduxForm} from "redux-form";
import {Field} from "redux-form";
import {Button, Checkbox, Input} from "../common/FormsControls/FormFields";
import {emailValidation, requiredField} from "../../utils/validators/validators";


const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit} className={c.loginForm}>
            <Field component={Input} validate={emailValidation} name={'login'} type="text" placeholder="Login" />
            <Field component={Input} validate={requiredField} type={"password"} placeholder={"Password"} name={'password'}/>
            <Field id={'rememberMe'} component={Checkbox} name={'rememberMe'} label={'Remember me'}/>

            <Button label={'Login'}/>
        </form>
    )
};


const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {

    };

    return(
        <div className={c.loginPage}>
           <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit} />
        </div>
    )
};



export default Login;