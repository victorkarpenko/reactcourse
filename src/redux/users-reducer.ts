import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";
import {UserType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";
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

type ActionsTypes =
    FollowSuccessActionType
    | UnfollowSuccessActionType
    | SetCurrentPageActionType
    | SetUsersActionType
    | SetTotalUsersCountActionType
    | ToggleIsFetchingActionType
    | ToggleFollowingInProgressActionType

type FollowSuccessActionType = {
    type: typeof FOLLOW,
    userID: number
}

type UnfollowSuccessActionType = {
    type: typeof UNFOLLOW,
    userID: number
}

type SetUsersActionType = {
    type: typeof SET_USERS,
    users: Array<UserType>
}
type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE,
    newCurrentPage: number
}
type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    totalCount: number
}
type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}
type ToggleFollowingInProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: boolean,
    userId: number
}

// action creators
const followSuccess = (userID: number): FollowSuccessActionType => ({type: FOLLOW, userID: userID});
const unfollowSuccess = (userID: number): UnfollowSuccessActionType => ({type: UNFOLLOW, userID: userID});
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({type: SET_USERS, users: users});
export const setCurrentPage = (newCurrentPage: number): SetCurrentPageActionType => ({
    type: SET_CURRENT_PAGE,
    newCurrentPage
});
export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountActionType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount
});
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});

const toggleFollowingInProgress = (isFetching: boolean, userId: number): ToggleFollowingInProgressActionType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

type DispatchType = Dispatch<ActionsTypes>;

//thunk creators
export const requestUsers = (page: number, pageSize: number): ThunkType => async (dispatch) => {
    dispatch(toggleIsFetching(true));

    const data = await usersAPI.getUsers(page, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
};

export const follow = (userID: number): ThunkType => async (dispatch) => {
    _followUnfollowFlow(dispatch, userID, usersAPI.follow.bind(usersAPI), followSuccess);
};

export const unfollow = (userID: number): ThunkType => async (dispatch) => {
    _followUnfollowFlow(dispatch, userID, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
};


const _followUnfollowFlow = async (dispatch: DispatchType, userID: number, apiMethod: any, actionCreator: (userId: number) => ActionsTypes) => {
    dispatch(toggleFollowingInProgress(true, userID));

    const data = await apiMethod(userID);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userID));
        dispatch(toggleFollowingInProgress(false, userID));
    }
};

export default usersReducer;