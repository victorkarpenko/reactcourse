import MyPosts from "./MyPosts";
import {addPostActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {PostType} from "../../../types/types";

type StatePropsType = {
    posts: Array<PostType>
}

const mapStateToProps = (state: AppStateType): StatePropsType =>{
    return({
        posts: state.profilePage.posts,
    });
};

type DispatchPropsType = {
    addPost: (newPostText: string) => void
}

const mapDispatchToProps = (dispatch: any) =>{
  return(
      {
          addPost: (newPostText: string) =>{
              dispatch(addPostActionCreator(newPostText));
          }
      }
  )
};

const MyPostsContainer = connect<StatePropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
