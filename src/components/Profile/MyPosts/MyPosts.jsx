import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
    <div className={s.postBlock}>
      MyPosts
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message="Hi, how are you?" like="6" />
        <Post message="Your clean car" like="2" />
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
