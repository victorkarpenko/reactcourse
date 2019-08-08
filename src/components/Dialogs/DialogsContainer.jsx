import React from 'react';
import Dialogs from "./Dialogs";
import {sendMsgActionCreator, updateNewMsgActionCreator} from "../../redux/messages-reducer";

const DialogsContainer = (props) => {

    let state = props.store.getState();

    const sendMsg = () => {
        props.store.dispatch(sendMsgActionCreator());
    };

    const updateNewMsg = (text) =>{
        props.store.dispatch(updateNewMsgActionCreator(text));
    };


    return(
       <Dialogs updateNewMsg={updateNewMsg} sendMsg={sendMsg} messagesPage={state.messagesPage}/>
    )
};

export default DialogsContainer;