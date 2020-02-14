import {checkAuth} from "./auth-reducer";

const SET_INITIALIZED = "socailnetwork/app/SET_INITIALIZED";

export type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false,
};


const appReducer = (state = initialState, action: any):InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
};

type InitializedActionType = {
    type: typeof SET_INITIALIZED
}

export const setInit = ():InitializedActionType => ({type: SET_INITIALIZED});

export const initializeApp = () => (dispatch:any) => {
    let promises = dispatch(checkAuth());
    Promise.all([promises]).then(data => {
            dispatch(setInit())
        }
    );
};

export default appReducer;