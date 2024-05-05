import React from "react";
import Preloader from "../hhh/Preloader";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
if(!props.profile) {
  return <Preloader />
}

  return (
    <div>
      <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} upDateStatusCreator={props.upDateStatusCreator} />
      <MyPostsContainer  />
    </div>
  );
};

export default Profile;
