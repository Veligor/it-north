import React from "react";
import { connect } from "react-redux";
import {addPostActionCreator, setAddPostInfinite, upDataNewPostTextActionCreator} from "../../Redux/profile-reducer";
import MyPosts from "./MyPosts";


const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {dispatch(addPostActionCreator())},
    updateNewPostText: (text) => {dispatch(upDataNewPostTextActionCreator(text))},
    setAddPostInfinite: () => {dispatch(setAddPostInfinite())}
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
