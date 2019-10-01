import React from 'react';
import c from './FormControls.module.css';

const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    const fieldClassname = hasError ? c.formField + ' ' + c.hasError : c.formField;
    return (
        <div className={fieldClassname}>
            {props.children}
            <div className={c.helpBlock}>
                {
                    hasError ? meta.error : null
                }
            </div>
        </div>
    )
};

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}>
            <textarea {...input}{...restProps} className={c.textarea + ' ' + c.formControl}/>
        </FormControl>
    )
};

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}>
            <input {...input}{...restProps} className={ c.input + ' ' + c.formControl}/>
        </FormControl>
    )
};

export const Checkbox = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    const fieldClassname = hasError ? c.formField + ' ' + c.hasError : c.formField;
    return (
        <div className={fieldClassname}>
            <input type='checkbox' {...input} {...props} className={c.checkbox + ' ' + c.formControl}/>
            <label className={c.checkbox__label} htmlFor={props.id}>{props.label}</label>
        </div>
    )
};

export const Button = (props) => {
    return (
        <button {...props.type} className={props.className ? props.className : c.button}>{props.label}</button>
    )
};