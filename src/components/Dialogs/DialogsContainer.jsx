import Dialogs from "./Dialogs";
import {sendMsgActionCreator, updateNewMsgActionCreator} from "../../redux/messages-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) =>{
  return {
      messagesPage: state.messagesPage
  }
};

let mapDispatchToProps = (dispatch) =>{
    return {
        sendMsg: () => {dispatch(sendMsgActionCreator());},
        updateNewMsg:  (text) =>{dispatch(updateNewMsgActionCreator(text));}
    }
};

export default compose(

    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);