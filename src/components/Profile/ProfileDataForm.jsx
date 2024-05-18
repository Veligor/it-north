import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {saveProfile} from "./../Redux/profile-reducer"
import s from "./ProfileEditData.module.css"

export const ProfileDataForm = (props) => {
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.profilePage.profile)
  return <div>
    <h1>Any</h1>
    <Formik
    
       initialValues={{FullName: profile.fullName, lookingForAJob: profile.lookingForAJob
        , lookingForAJobDescription: profile.lookingForAJobDescription, aboutMe: profile.aboutMe,  }}
      

      onSubmit={(values, { setSubmitting }) => {
        
        dispatch(saveProfile(values))
        props.setEditMode(false)
        console.log(values)
       
      }} 
         >
      {({ isSubmitting }) => (
        <Form className={s.form}>
      <div> <b>FullName: </b>   <Field type="text" name="FullName" placeholder="Full name" className={s.fullName}/></div>
        <div><b>Looking for a job: </b> <Field type="checkbox" name="lookingForAJob" className={s.check}/> </div>
    <div className={s.container}>
    <div><b> My professions skills: </b>     <Field as="textarea" className={s.textArea} name="lookingForAJobDescription"  placeholder="My professions skills"/> </div>
  <div><b> About me: </b> <Field as="textarea" className={s.textArea} name="aboutMe"  placeholder="About Me"/> </div>

    </div>

        {Object.keys(props.profile.contacts).map((key) => {
          return <div><b>{key}:  <div><Field type="text" name={`contacts.${key}`} placeholder={key}/></div></b></div>
        })}
<div className={s.btn}> <button type="submit" className={s.btnOne}>
            Save
          </button></div>
{/* 
          <ErrorMessage name="email" component="div" />
         
          <ErrorMessage name="password" component="div" /> */}
         
        </Form>
      )}
    </Formik>
  </div>
}

export default ProfileDataForm;