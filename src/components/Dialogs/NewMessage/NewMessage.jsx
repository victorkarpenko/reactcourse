import React from 'react';
import c from './NewMessage.module.css'
import {sendMsgActionCreator, updateNewMsgActionCreator} from "../../../redux/messages-reducer";

const NewMessage = (props) => {

    const onButtonClick = () => {
        props.dispatch(sendMsgActionCreator());
    };
    const onMsgChange = (e) =>{
        const text = e.target.value;
        props.dispatch(updateNewMsgActionCreator(text));
    };
    const onEnterPress = (e) =>{
        if(e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            onButtonClick();
        }
    };

  return(
      <div className={c.newMessage}>
          <textarea onKeyDown={onEnterPress} onChange={onMsgChange} className={c.textarea} value={props.newMsg} placeholder="Enter new message"></textarea>
          <button className={c.sendBtn} onClick={onButtonClick}></button>
      </div>
  )
};

export default NewMessage;