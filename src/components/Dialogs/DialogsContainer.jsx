import Dialogs from "./Dialogs";
import {sendMsgActionCreator} from "../../redux/messages-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) =>{
  return {
      messagesPage: state.messagesPage
  }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        sendMsg: (newMsg) => {dispatch(sendMsgActionCreator(newMsg));}
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);