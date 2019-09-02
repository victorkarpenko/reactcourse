import Dialogs from "./Dialogs";
import {sendMsgActionCreator, updateNewMsgActionCreator} from "../../redux/messages-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
  return {
      messagesPage: state.messagesPage,
      isAuth: state.auth.isAuth
  }
};

let mapDispatchToProps = (dispatch) =>{
    return {
        sendMsg: () => {dispatch(sendMsgActionCreator());},
        updateNewMsg:  (text) =>{dispatch(updateNewMsgActionCreator(text));}
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;