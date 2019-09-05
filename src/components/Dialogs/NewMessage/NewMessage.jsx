import React from 'react';
import c from './NewMessage.module.css'
import {reset, Field, reduxForm} from "redux-form";

const NewMsgForm = (props) => {

    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={'input'} type={'text'} name={'newMsgInput'} className={c.textarea} placeholder="Enter new message"/>
            <button className={c.sendBtn}></button>
        </form>
    );
};

const afterSubmit = (result, dispatch) =>
    dispatch(reset('newMsgForm'));

const ReduxNewMsgForm = reduxForm({form: 'newMsgForm',  onSubmitSuccess: afterSubmit,})(NewMsgForm);

const NewMessage = (props) => {

    const onButtonClick = (formData) => {
        props.sendMsg(formData.newMsgInput);
    };

  return(
      <div className={c.newMessage}>
          <ReduxNewMsgForm onSubmit={onButtonClick} />
      </div>
  )
};

export default NewMessage;