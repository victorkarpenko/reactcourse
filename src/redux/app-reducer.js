import {checkAuth} from "./auth-reducer";

const SET_INITIALIZED = "SET_INITIALIZED";

let initialState = {
    initialized: false,
};


const appReducer = (state = initialState, action) => {
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

export const setInit = () => ({type: SET_INITIALIZED});

export const initializeApp = () => (dispatch) => {
    let promises = dispatch(checkAuth());
    Promise.all([promises]).then(data => {
            dispatch(setInit())
        }
    );
};

export default appReducer;