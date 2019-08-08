import React from 'react';
import c from './NewMessage.module.css'

const NewMessage = (props) => {

    const onButtonClick = () => {
        props.sendMsg();
    };
    const onMsgChange = (e) =>{
        const text = e.target.value;
        props.updateNewMsg(text);
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