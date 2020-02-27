import {FriendType} from "../types/types";

const initialState = {
    friends : [
        {id: 2, name: 'Sebek'},
        {id: 3, name: 'Cotlovan'},
    ] as Array<FriendType>
};

type InitialStateType = typeof initialState;

const sidebarReducer = (state = initialState): InitialStateType => {
    return state;
};

export default sidebarReducer;