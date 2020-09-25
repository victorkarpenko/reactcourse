import {actions, follow, unfollow} from "./users-reducer";
import {ResultsCodeEnum, usersAPI} from "../api/api";

jest.mock('../api/api');


const usersAPIMock = usersAPI as jest.Mocked<typeof usersAPI>;
const result = {
    data: {},
    resultCode: ResultsCodeEnum.Success,
    messages: []
};

usersAPIMock.follow.mockReturnValue(Promise.resolve(result));
usersAPIMock.unfollow.mockReturnValue(Promise.resolve(result));

const dispatchMock = jest.fn();
const getStateMock = jest.fn();

beforeEach(()=>{


    dispatchMock.mockClear()
    getStateMock.mockClear()
})


test('follow thunk should be success', async () => {
    const thunk = follow(1);

    await thunk(dispatchMock, getStateMock, {});

    expect(dispatchMock).toBeCalledTimes(3);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingInProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followSuccess(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingInProgress(false, 1))
});


test('unfollow thunk should be success', async () => {
    const thunk = unfollow(1);
    await thunk(dispatchMock, getStateMock, {});

    expect(dispatchMock).toBeCalledTimes(3);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingInProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollowSuccess(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingInProgress(false, 1))
});