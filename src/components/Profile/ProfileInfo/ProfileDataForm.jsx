import * as React from "react";
import c from "./ProfileInfo.module.css";
import {Button, Checkbox, Input, Textarea} from "../../common/FormsControls/FormFields";
import {Field, reduxForm} from "redux-form";
import classes from "../../common/FormsControls/FormControls.module.css";

let ProfileDataForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={c.userProfile__formField}>
                <span>Fullname:</span>
                <Field component={Input} name={'fullName'} type="text" placeholder="Full name" />
            </div>
            <div className={c.userProfile__formField}>
                <Field id={'lookingForAJob'} component={Checkbox} name={'lookingForAJob'} label={'You are looking a job?'}/>
            </div>
            <div className={c.userProfile__formField}>
                <span>Professional skills:</span>
                <Field component={Textarea} placeholder="Enter description of your professional skills"
                       name={'lookingForAJobDescription'}/>
            </div>
            <div className={c.userProfile__formField}>
                <span>About me:</span>
                <Field component={Textarea} placeholder="Tell about yourself"
                       name={'aboutMe'}/>
            </div>
            {
            Object.keys(props.userProfile.contacts).map(key => {
            return <div key={key} className={c.userProfile__formField}>
                <span>{key}:</span>
                <Field component={Input} placeholder={key}
                       name={`contacts.${key}`}/>
            </div>
        })}
            {
                props.error && <div className={classes.helpBlock + ' ' + classes.hasError}>{props.error}</div>
            }
            <Button label={'Save'}/> <Button onClick={props.cancelEdit} label={'Cancel'}/>

        </form>
    )
};


ProfileDataForm = reduxForm({form: 'profileForm'})(ProfileDataForm);


export default ProfileDataForm;