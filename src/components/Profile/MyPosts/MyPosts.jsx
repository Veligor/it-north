import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  

let postElement = props.postData.map( p => <Post message={p.message} like={p.like} />)
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
        {postElement}
      </div>
    </div>
  );
};

export default MyPosts;
 