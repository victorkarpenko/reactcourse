import usersReducer, {actions, InitialStateType} from "./users-reducer";

let state: InitialStateType;

beforeEach(()=> {
    state = {
        users: [
            {
                id: 0,
                name: 'Lol Test',
                followed: false,
                photos: {small: null, large:null},
                status: 'sadfdasas'
            },
            {
                id: 1,
                name: 'Lol Test2',
                followed: false,
                photos: {small: null, large:null},
                status: 'dsfdsfdsfa324'
            },
            {
                id: 2,
                name: 'Lol Test3',
                followed: true,
                photos: {small: null, large:null},
                status: 'sads343434fdasas'
            }
        ],
        pageSize: 20,
        totalItemsCount: 1,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [],
        linksOnPage: 10
    }
});

test('follow success', () => {


    const newState = usersReducer(state, actions.followSuccess(1));

    expect(newState.users[0].followed).toBeFalsy();
    expect(newState.users[1].followed).toBeTruthy();
});

test('unfollow success', () => {


    const newState = usersReducer(state, actions.unfollowSuccess(2));

    expect(newState.users[2].followed).toBeFalsy();
});