type FriendType = {
    id: number,
    name: string
}

let initialState = {
    friends : [
        {id: 2, name: 'Sebek'},
        {id: 3, name: 'Cotlovan'},
    ] as Array<FriendType>
};

type InitialStateType = typeof initialState;

const sidebarReducer = (state = initialState, action:any): InitialStateType => {
    return state;
};

export default sidebarReducer;