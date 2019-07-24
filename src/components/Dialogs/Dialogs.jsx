import React from 'react';
import c from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {


    let dialogsElems =  props.dialogs.dialogsData.map(item => (<DialogItem name={item.name} id={item.id} />));
    let messagesElems = props.dialogs.messagesData.map(el => (<Message type={el.type} text={el.message} />));

    return(
        <div className={c.dialogs}>
            <div className={c.usersList}>
                { dialogsElems }
            </div>
            <div className={c.dialogsList}>
                <div className={c.dialog}>
                    { messagesElems }
                </div>
            </div>
        </div>
    )
};

export default Dialogs;