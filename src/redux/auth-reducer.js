import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState ={
    id: null,
    login: null,
    email: null,
    isAuth: false
};

//reducer
const authReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
};

//action creator
const setAuthUserData = (email, id, login) =>({
    type: SET_USER_DATA, data: {
        email,
        id,
        login
    }
});

//thunk creator
export const checkAuth = () => {
    return (dispatch) => {
        authAPI.getMe().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(email, id, login));
            }
        });
    }
};

export default authReducer;