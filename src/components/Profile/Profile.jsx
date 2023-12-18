import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = (props) => {
    return <div> <img src="https://media-server.clubmed.com/image/jpeg/1024/auto/crop/center/70/https%3A%2F%2Fns.clubmed.com%2FFEAM%2FMarketing%2FOmnichannel%2FSEO%2FDestinations%2FThailande%2FGettyImages-910547262.jpg"></img> 
    <div>ava + description</div>
   <MyPosts />
    </div>
}

export default Profile;