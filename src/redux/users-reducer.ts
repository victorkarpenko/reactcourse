import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";
import {UserType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionTypes} from "./store";
import {Dispatch} from "redux";

const FOLLOW = 'socailnetwork/users/FOLLOW';
const UNFOLLOW = 'socailnetwork/users/UNFOLLOW';
const SET_USERS = 'socailnetwork/users/SET-USERS';
const SET_CURRENT_PAGE = 'socailnetwork/users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'socailnetwork/users/SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'socailnetwork/users/TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'socailnetwork/users/TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 20,
    totalItemsCount: 1,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>, //users id
    linksOnPage: 10
};

type InitialStateType = typeof initialState;

//reducer
const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, "id", {followed: true})
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, "id", {followed: false})
            };
        case SET_USERS: {
            return {...state, users: [...action.users]};
        }
        case SET_CURRENT_PAGE : {
            return {
                ...state,
                currentPage: action.newCurrentPage
            }
        }
        case SET_TOTAL_USERS_COUNT : {
            return {
                ...state,
                totalItemsCount: action.totalCount
            }
        }
        case TOGGLE_IS_FETCHING : {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS : {
            return {
                ...state,
                followingInProgress:
                    action.isFetching ?
                        [...state.followingInProgress, action.userId]
                        : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
};
// action creators
export const actions = {
    followSuccess: (userID: number) => ({type: FOLLOW, userID: userID} as const),
    unfollowSuccess: (userID: number) => ({type: UNFOLLOW, userID: userID} as const),
    setUsers: (users: Array<UserType>) => ({type: SET_USERS, users: users} as const),
    setCurrentPage: (newCurrentPage: number) => ({type: SET_CURRENT_PAGE, newCurrentPage} as const),
    setTotalUsersCount: (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const),
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId} as const),
}

type ActionsTypes = InferActionTypes<typeof actions>

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

type DispatchType = Dispatch<ActionsTypes>;

//thunk creators
export const requestUsers = (page: number, pageSize: number): ThunkType => async (dispatch) => {
    dispatch(actions.toggleIsFetching(true));

    const data = await usersAPI.getUsers(page, pageSize);
    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalUsersCount(data.totalCount));
};

export const follow = (userID: number): ThunkType => async (dispatch) => {
    _followUnfollowFlow(dispatch, userID, usersAPI.follow.bind(usersAPI), actions.followSuccess);
};

export const unfollow = (userID: number): ThunkType => async (dispatch) => {
    _followUnfollowFlow(dispatch, userID, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess);
};


const _followUnfollowFlow = async (dispatch: DispatchType, userID: number, apiMethod: any, actionCreator: (userId: number) => ActionsTypes) => {
    dispatch(actions.toggleFollowingInProgress(true, userID));

    const data = await apiMethod(userID);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userID));
        dispatch(actions.toggleFollowingInProgress(false, userID));
    }
};

export default usersReducer;