import React from 'react';
import c from "./Message.module.css";

const Message = (props) =>{
    let type = props.type === 'input' ? c.inputMsg : props.type === 'output' ? c.outputMsg : '';
    return(
        <div className={type + " " + c.msg}>{props.text}</div>
    )
};

export default Message;