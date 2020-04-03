import React from 'react';
import c from './FormControls.module.css';
import {WrappedFieldMetaProps} from "redux-form";

type FormControlType = {
    meta: WrappedFieldMetaProps
}

export type LoginDataType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha?: string
}

export type LoginNamesKeys =  keyof LoginDataType;

const FormControl: React.FC<FormControlType> = ({meta, children}) => {
    const hasError = meta.touched && meta.error;
    const fieldClassname = hasError ? c.formField + ' ' + c.hasError : c.formField;
    return (
        <div className={fieldClassname}>
            {children}
            <div className={c.helpBlock}>
                {
                    hasError ? meta.error : null
                }
            </div>
        </div>
    )
};

export const Textarea = (props: any) => {
    const {input, meta, children, ...restProps} = props;
    return (
        <FormControl {...props}>
            <textarea {...input}{...restProps} className={c.textarea + ' ' + c.formControl}/>
        </FormControl>
    )
};

export const Input = ({input, meta, children, ...props}: any) => {
    return (
        <FormControl meta={meta}>
            <input {...input}{...props} className={c.input + ' ' + c.formControl}/>
        </FormControl>
    )
};

export const Checkbox = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error;
    const fieldClassname = hasError ? c.formField + ' ' + c.hasError : c.formField;
    return (
        <div className={fieldClassname}>
            <input type='checkbox' {...input} {...props} checked={input.value}
                   className={c.checkbox + ' ' + c.formControl}/>
            <label className={c.checkbox__label} htmlFor={props.id}>{props.label}</label>
        </div>
    )
};

export const Button = (props: any) => {
    return (
        <button {...props.type} className={props.className ? props.className : c.button}>{props.label}</button>
    )
};