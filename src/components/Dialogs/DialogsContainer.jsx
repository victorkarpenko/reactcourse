import React from 'react';
import Dialogs from "./Dialogs";
import {sendMsgActionCreator, updateNewMsgActionCreator} from "../../redux/messages-reducer";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {

    return(
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    const sendMsg = () => {
                        store.dispatch(sendMsgActionCreator());
                    };

                    const updateNewMsg = (text) =>{
                        store.dispatch(updateNewMsgActionCreator(text));
                    };


                    return <Dialogs updateNewMsg={updateNewMsg} sendMsg={sendMsg} messagesPage={state.messagesPage}/>;
                }
            }
        </StoreContext.Consumer>

    )
};

export default DialogsContainer;