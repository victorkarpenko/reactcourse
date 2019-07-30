import React from 'react';
import c from './NewMessage.module.css'

const NewMessage = (props) => {
    const newMessage = React.createRef();

    const onButtonClick = () => {
        props.sendMsg();
    };
    const onMsgChange = () =>{
        const text = newMessage.current.value;
        props.updateNewMsg(text);
    };
    const onEnterPress = (e) =>{
        if(e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            onButtonClick();
        }
    }

  return(
      <div className={c.newMessage}>
          <textarea onKeyDown={onEnterPress} onChange={onMsgChange} ref={newMessage} name="" id="" cols="30" rows="10" className={c.textarea} value={props.newMsg} placeholder="Enter new message"></textarea>
          <button className={c.sendBtn} onClick={onButtonClick}></button>
      </div>
  )
};

export default NewMessage;