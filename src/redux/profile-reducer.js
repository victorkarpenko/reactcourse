const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) =>{

    switch (action.type) {
        case ADD_POST:
            const prevID = state.posts[state.posts.length - 1].id;
            let newPost = {
                id: prevID+1,
                message: state.newPostText,
                likes: 0
            };

            if(newPost.message !== ''){
                state.posts.push(newPost);
                state.newPostText='';
            }
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:  return state;

    }
};

//action creators

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) =>({
    type: UPDATE_NEW_POST_TEXT, newText: text
});

export default profileReducer;