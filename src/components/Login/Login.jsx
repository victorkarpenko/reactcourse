import React from 'react';
import c from './Login.module.css';
import {reduxForm} from "redux-form";
import {Field} from "redux-form";


const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit} className={c.loginForm}>
            <Field component={'input'} name={'login'} type="text" placeholder="Login" className={c.loginForm__input} />
            <Field component={'input'} type={"password"} placeholder={"Password"} name={'password'} className={c.loginForm__input}/>
            <div className={c.loginForm__checkboxWrp}>
                <Field className={c.loginForm__checkbox} id={'rememberMe'} component={'input'} name={'rememberMe'} type="checkbox"/>
                <label className={c.loginForm__label} htmlFor={'rememberMe'}>Remember me</label>
            </div>

            <button className={c.button}>Login</button>
        </form>
    )
};


const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    };

    return(
        <div className={c.loginPage}>
           <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit} />
        </div>
    )
};



export default Login;