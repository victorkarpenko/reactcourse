import React from 'react';
import c from "./Message.module.css";

type Props = {
    type: 'input' | 'output',
    text: string
}

const Message: React.FC<Props> = (props) =>{
    const type = props.type === 'input' ? c.inputMsg : props.type === 'output' ? c.outputMsg : '';
    return(
        <div className={type + " " + c.msg}>{props.text}</div>
    )
};

export default Message;