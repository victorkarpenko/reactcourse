import {checkAuth} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";

const SET_INITIALIZED = "socailnetwork/app/SET_INITIALIZED";

export type InitialStateType = {
    initialized: boolean
}

const initialState: InitialStateType = {
    initialized: false,
};

const appReducer = (state = initialState, action: ActionsType):InitialStateType => {
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

type ActionsType = InitializedActionType;

type InitializedActionType = {
    type: typeof SET_INITIALIZED
}

export const setInit = ():InitializedActionType => ({type: SET_INITIALIZED});

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const initializeApp = ():ThunkType => async (dispatch:any) => {
    let promises = await dispatch(checkAuth());
    Promise.all([promises]).then(data => {
            dispatch(setInit())
        }
    );
};

export default appReducer;