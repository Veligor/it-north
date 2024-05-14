import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={s.photo}>
        <img src="https://i.pinimg.com/originals/37/76/4a/37764a2abe35ecc9d02652fd07fb8767.jpg" alt="postPhoto"></img>{" "}
{props.message}      <div>
          <span>like </span>{props.like}
        </div>
      </div>
    </div>
  );
};  

export default Post;