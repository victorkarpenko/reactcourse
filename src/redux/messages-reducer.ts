const SEND_MSG = 'socailnetwork/messages/SEND-MSG';

type DialogType = {
    id: number,
    name: string
}

type MessageType = {
    id: number,
    message: string,
    type: 'input' | 'output',
}

const initialState ={
    dialogs: [
        {id: 1, name: 'Viktor'},
        {id: 2, name: 'Sebek'},
        {id: 3, name: 'Cotlovan'},
    ] as Array<DialogType>,

    messages: [
        {id: 1, message: 'Hey, how are you', type: 'input'},
        {id: 2, message: 'Hi, a\'im zbs. You?', type: 'output'},
        {
            id: 3,
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam beatae blanditiis ' +
                'eaque explicabo illum itaque iure laboriosam libero modi, odio quisquam quos repellendus ' +
                'repudiandae rerum sapiente suscipit tempora tempore voluptates?',
            type: 'output'
        },
        {id: 4, message: 'Okay, thanks for you respond', type: 'input'},
    ] as Array<MessageType>,
};

export type MessagesInitialStateType = typeof initialState;

const messagesReducer = (state = initialState, action: ActionsType):MessagesInitialStateType =>{
    switch (action.type) {
        case SEND_MSG:
            const prevID = state.messages[state.messages.length - 1].id;
            let newMsg = {
                id: prevID + 1,
                message: action.newMessage,
                type: 'output'
            } as MessageType;

            let newState={...state};
            if (!!newMsg.message){
                newState = {
                    ...state,
                    messages: [...state.messages, newMsg]
                };
            }
            return newState;
        default:
            return state;
    }
};

type ActionsType = SendMsgActionType;

type SendMsgActionType = {
    type: typeof SEND_MSG,
    newMessage: string
}

export const sendMsgActionCreator = (newMessage:string): SendMsgActionType => ({type: SEND_MSG, newMessage});


export default messagesReducer;