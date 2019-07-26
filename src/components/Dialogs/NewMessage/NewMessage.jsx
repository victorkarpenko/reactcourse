import React from 'react';
import c from './NewMessage.module.css'

const NewMessage = (props) => {
    const newMessage = React.createRef();

    const clickListener = () =>{
        alert(newMessage.current.value);
    };

  return(
      <div className={c.newMessage}>
          <textarea ref={newMessage} name="" id="" cols="30" rows="10" className={c.textarea} placeholder="Enter new message"></textarea>
          <button className={c.sendBtn} onClick={clickListener}></button>
      </div>
  )
};

export default NewMessage;