import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {
   return <div>
      MyPosts
      <div>
         <textarea></textarea>
         <button>Add Post</button>
      </div>
      <div className={s.posts}>
      <Post />
      <Post />
      <Post />
      </div>
   </div>
}

export default MyPosts; 