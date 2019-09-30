import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likes: '54'},
        {id: 2, message: 'It\'s my first react app', likes: '102'},
        {id: 3, likes: '8'},
    ]
};

it('new post should be added', () => {

    let action = addPostActionCreator("testing");
    let newState = profileReducer(initialState, action)

    expect( newState.posts.length).toBe(4);
})

it('message of new post should be "testing"', () => {

    let action = addPostActionCreator("testing");
    let newState = profileReducer(initialState, action);

    expect( newState.posts[3].message).toBe('testing');
})

it('removed post', () => {
    let action = deletePost(1);

    let newState = profileReducer(initialState, action);

    expect(newState.posts.length).toBe(2);
});

it('after deleting length sholudn`t be decrement if id is incorrect' , () => {
    let action = deletePost(4);

    let newState = profileReducer(initialState, action);

    expect(newState.posts.length).toBe(3);
});