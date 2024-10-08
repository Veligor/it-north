import React, { useState }from "react";
import s from "./ProfileInfo.module.css";
import userPhoto from "./../../../photo/images/User.png";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";
import  {ProfileDataForm}  from "./../ProfileDataForm"

const ProfileInfo = (props) => {
  const[editMode, setEditMode] = useState(false)
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }; 
  return (
    <div>
      <div className={s.description}>
       <div className={s.profileImgContainer}>
      <img 
          src={props.profile.photos.large || userPhoto}
          className={s.avatar}
        />
        {props.isOwner === 29369 && (
          <input type={"file"} size='60' onChange={onMainPhotoSelected} className={s.btn}/>
        )}
       </div>
      <div className={s.editMode}>

      {editMode ? <ProfileDataForm setEditMode={setEditMode} profile={props.profile} /> : <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => setEditMode(true)}/>}
       
       <ProfileStatusWithHooks
         status={props.status}
         upDateStatusCreator={props.upDateStatusCreator}
       />
      </div>
      </div>
     
    </div>
  );
};
const ProfileData = (props) => {
  return <div className={s.profileData}>

     <div className={s.fullName}>
        <h className={s.letterSpacing}> {props.profile.fullName}</h>
      </div>
      <div>looking for a job: {props.lookingForAJob
 ? "No" : "Yes"}</div>
      {props.profile.lookingForAJob && (
        <div>
          My professions skills:{props.profile.lookingForAJobDescription}{" "}
        </div>
      )}
      <div>About Me: {props.profile.aboutMe}</div>
      <div className={s.contacts}>
        Contacts:{" "}
        {Object.keys(props.profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={props.profile.contacts[key]}
            />
          );
        })}
      </div>

      { props.isOwner === 29369 && <div className={s.btnDiv}><button onClick={props.goToEditMode} className={s.button}>Edit</button></div> }
  </div>
}

export const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contact}>
      <b>{contactTitle}</b>: {contactValue}{" "}
    </div>
  );
};

export default ProfileInfo;


