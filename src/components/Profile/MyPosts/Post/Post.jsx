import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={s.photo}>
        <img src="https://i.pinimg.com/736x/fe/03/a5/fe03a5ed946a344bc971831188fb1ee4.jpg"></img>{" "}
        post 1
        <div>
          <span>like</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
