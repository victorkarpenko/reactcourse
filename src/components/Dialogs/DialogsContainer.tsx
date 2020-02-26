import Dialogs from "./Dialogs";
import {sendMsgActionCreator, MessagesInitialStateType} from "../../redux/messages-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/store";

type StatePropsType = {
    messagesPage: MessagesInitialStateType
}

const mapStateToProps = (state: AppStateType): StatePropsType =>{
  return {
      messagesPage: state.messagesPage
  }
};

type DispatchPropsType = {
    sendMsg: (newMsg: string) => void
}

const mapDispatchToProps = (dispatch: any) =>{
    return {
        sendMsg: (newMsg: string) => {dispatch(sendMsgActionCreator(newMsg));}
    }
};

export default compose(
    connect<StatePropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);