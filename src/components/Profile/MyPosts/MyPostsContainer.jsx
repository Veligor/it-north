import React from "react";
import {addPostActionCreator, upDataNewPostTextActionCreator} from "../../Redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
  
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    let action = upDataNewPostTextActionCreator(text);
    props.dispatch(action);
  };
  return (
    <div >
     <MyPosts updateNewPostText={onPostChange} addPost={addPost} state={props.state}/>
    </div>
  );
};

export default MyPostsContainer;
