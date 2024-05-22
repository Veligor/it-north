import React, { memo } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import al from "./../../../photo/images/All.jpg"

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
   <div>
     <div className={s.postBlock}>
     
    
       <div className={s.blockTextArea}>
        
         <textarea
        //  placeholder={al}
         className={s.textArea}
           onChange={onPostChange}
           ref={newTextElement}
           value={props.profilePage.newPostText}
         />
         <button className={s.btn} onClick={onAddPost}>Add Post</button>
       </div>
        <div className={s.posts}>
                {postElement}
           </div>
   </div>
  </div>
  );
})


export default MyPosts;
