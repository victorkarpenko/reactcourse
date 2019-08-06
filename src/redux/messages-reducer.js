const SEND_MSG = 'SEND-MSG';
const UPDATE_NEW_MSG = 'UPDATE-NEW-MSG';

const messagesReducer = (state, action) =>{

    switch (action.type) {
        case SEND_MSG:
            const prevID = state.messages[state.messages.length - 1].id;
            let newMsg = {
                id: prevID + 1,
                message: state.newMessage,
                type: 'output'
            };

            if (newMsg.message !== ''){
                state.messages.push(newMsg);
                state.newMessage='';
            }
            return state;
        case UPDATE_NEW_MSG:
            state.newMessage = action.newText;
            return state;
        default:
            return state;
    }
};

export const sendMsgActionCreator = () => ({type: SEND_MSG});

export const updateNewMsgActionCreator = (text) =>({
    type: UPDATE_NEW_MSG, newText: text
});


export default messagesReducer;