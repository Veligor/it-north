import React, { memo } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = memo(function MyPosts (props)  {
  let newTextElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let postElement = props.profilePage.postData.map((p) => (
    <Post message={p.message} like={p.like} />
  ));
  let onPostChange = () => {
    let text = newTextElement.current.value;
    props.updateNewPostText(text);
  };
  return (
    <div className={s.postBlock}>
      MyPosts
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newTextElement}
            value={props.profilePage.newPostText}
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>{postElement}</div>
    </div>
  );
})


export default MyPosts;
