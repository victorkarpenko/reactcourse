import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'socailnetwork/users/FOLLOW';
const UNFOLLOW = 'socailnetwork/users/UNFOLLOW';
const SET_USERS = 'socailnetwork/users/SET-USERS';
const SET_CURRENT_PAGE = 'socailnetwork/users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'socailnetwork/users/SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'socailnetwork/users/TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'socailnetwork/users/TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 20,
    totalItemsCount: 1,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [2, 3],
    linksOnPage: 10
};

//reducer
const usersReducer = (state = initialState, action) => {
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
                        : [state.followingInProgress.filter(id => id !== action.userId)]
            }
        }
        default:
            return state;
    }
};

// action creators
const followSuccess = (userID) => ({type: FOLLOW, userID: userID});
const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID: userID});
export const setUsers = (users) => ({type: SET_USERS, users: users});
export const setCurrentPage = (newCurrentPage) => ({type: SET_CURRENT_PAGE, newCurrentPage});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
const toggleFollowingInProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});


//thunk creators
export const requestUsers = (page, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));

    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
};

export const follow = (userID) => async (dispatch) => {
    followUnfollowFlow(dispatch, userID, usersAPI.follow.bind(usersAPI), followSuccess);
};

export const unfollow = (userID) => async (dispatch) => {
    followUnfollowFlow(dispatch, userID, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
};


const followUnfollowFlow = async (dispatch, userID, apiMethod, actionCreator) => {
    dispatch(toggleFollowingInProgress(true, userID));

    let data = await apiMethod(userID);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userID));
        dispatch(toggleFollowingInProgress(false, userID));
    }
};

export default usersReducer;