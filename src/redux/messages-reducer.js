const SEND_MSG = 'SEND-MSG';

let initialState ={
    dialogs: [
        {id: '1', name: 'Viktor'},
        {id: '2', name: 'Sebek'},
        {id: '3', name: 'Cotlovan'},
    ],

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
    ],
};

const messagesReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SEND_MSG:
            const prevID = state.messages[state.messages.length - 1].id;
            let newMsg = {
                id: prevID + 1,
                message: action.newMessage,
                type: 'output'
            };

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

export const sendMsgActionCreator = (newMessage) => ({type: SEND_MSG, newMessage});


export default messagesReducer;