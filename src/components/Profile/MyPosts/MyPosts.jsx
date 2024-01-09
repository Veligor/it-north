import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, upDataNewPostTextActionCreator} from "./../../Redux/profile-reducer";


const MyPosts = (props) => {
  let newTextElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let postElement = props.state.postData.map((p) => (
    <Post message={p.message} like={p.like} />
  ));
  let onPostChange = () => {
    let text = newTextElement.current.value;
    props.dispatch(upDataNewPostTextActionCreator(text));
  };
  return (
    <div className={s.postBlock}>
      MyPosts
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newTextElement}
            value={props.state.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>{postElement}</div>
    </div>
  );
};

export default MyPosts;
