import React from "react";
import s from "./Post.module.css";
import al from "./../../../../photo/images/All.jpg"

const Post = (props) => {
  return (
    <div className={s.container}>
      <div className={s.postContainer}>
       
<div className={s.postText}><img src={al}></img> <div className={s.message}>{props.message}</div></div>
  <div className={s.photo}>
        <img src="https://i.pinimg.com/originals/37/76/4a/37764a2abe35ecc9d02652fd07fb8767.jpg" alt="postPhoto"></img>{" "}
    </div>
     <div className={s.likePost}>
          <span>like {props.like}</span>
        </div>
      </div>
    </div>
  );
};  

export default Post;
  