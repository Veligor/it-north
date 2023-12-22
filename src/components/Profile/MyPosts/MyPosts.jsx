import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  
let postData = [
  {id: 1, message: "Hi, how are you?", like: "1"},
  {id: 2, message:"Your clean car", like:"2"},
  {id: 3, message:"Welcome", like:"3"},
]
let postElement = postData.map(p => <Post message={p.message} like={p.like} />)
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
