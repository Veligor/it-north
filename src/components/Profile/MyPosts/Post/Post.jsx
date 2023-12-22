import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={s.photo}>
        <img src="https://w.forfun.com/fetch/50/50c3e573a4cea5c3db4cf9e417967918.jpeg"></img>{" "}
{props.message}      <div>
          <span>like </span>{props.like}
        </div>
      </div>
    </div>
  );
}; 

export default Post;