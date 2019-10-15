import * as React from "react";
import c from "./ProfileInfo.module.css";
import {Button, Checkbox, Input, Textarea} from "../../common/FormsControls/FormFields";
import {Field, reduxForm} from "redux-form";
import {requiredField} from "../../../utils/validators/validators";

const ProfileDataForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={c.userProfile__formField}>
                <Field component={Input} name={'fullName'} type="text" placeholder="Full name" />
            </div>
            <div className={c.userProfile__formField}>
                <Field id={'lookingForAJob'} component={Checkbox} name={'lookingForAJob'} label={'You are looking a job?'}/>
            </div>
            <div className={c.userProfile__formField}>
                <Field component={Textarea} placeholder="Enter description of your professional skills"
                       name={'lookingForAJobDescription'}/>
            </div>
            <div className={c.userProfile__formField}>
                <Field component={Textarea} placeholder="Tell about yourself"
                       name={'aboutMe'}/>
            </div>
            <Button label={'save'}/>

        </form>
    )
};


const ReduxProfileForm = reduxForm({form: 'profileForm'})(ProfileDataForm);

export default ReduxProfileForm;