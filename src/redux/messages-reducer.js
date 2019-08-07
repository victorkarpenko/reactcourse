const SEND_MSG = 'SEND-MSG';
const UPDATE_NEW_MSG = 'UPDATE-NEW-MSG';

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
            id: 2,
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam beatae blanditiis ' +
                'eaque explicabo illum itaque iure laboriosam libero modi, odio quisquam quos repellendus ' +
                'repudiandae rerum sapiente suscipit tempora tempore voluptates?',
            type: 'output'
        },
        {id: 1, message: 'Okay, thanks for you respond', type: 'input'},

    ],
    newMessage: ''
};

const messagesReducer = (state = initialState, action) =>{

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