const FOLLOW ='FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: true
};

const usersReducer = (state = initialState, action) =>{
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map (u => {
                    if(u.id === action.userID){
                        return {...u, followed: true};
                    }
                    return u;
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map (u => {
                    if(u.id === action.userID){
                        return {...u, followed: false};
                    }
                    return u;
                }),
            };
        case SET_USERS: {
            return {...state, users:[...action.users]};
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
                totalUsersCount: action.totalCount
            }
        }
        case TOGGLE_IS_FETCHING : {
            return{
                ...state,
                isFetching: action.isFetching
            }
        }
        default:
            return state;
    }
};

export const follow = (userID) => ({type: FOLLOW, userID: userID});
export const unfollow = (userID) => ({type: UNFOLLOW, userID: userID});
export const setUsers = (users) => ({type: SET_USERS, users: users});
export const setCurrentPage = (newCurrentPage) => ({type: SET_CURRENT_PAGE, newCurrentPage: newCurrentPage});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount: totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching});

export default usersReducer;