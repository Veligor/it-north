import React from "react";
import s from "./ProfileInfo.module.css"
import ProfileStatus from "./../ProfileStatus";
import userPhoto from "./../../../photo/images/User.png"

const ProfileInfo = (props) => {
  
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };
    return <div> 
             <div>
               {/* <img src="https://media-server.clubmed.com/image/jpeg/1024/auto/crop/center/70/https%3A%2F%2Fns.clubmed.com%2FFEAM%2FMarketing%2FOmnichannel%2FSEO%2FDestinations%2FThailande%2FGettyImages-910547262.jpg"></img> */}
              </div> 
             <div className={s.description}>
              <img src={props.profile.photos.large || userPhoto} className={s.avatar}/>
               { props.isOwner === 29369  && <input type={'file'}  onChange={onMainPhotoSelected}  />  }
               
              <ProfileStatus status={props.status} upDateStatusCreator={props.upDateStatusCreator} />  
             </div>
             <div>{props.profile.fullName}</div>
             <div>{props.profile.lookingForAJobDescription}</div>
             </div>
}

export default ProfileInfo;


//17:54