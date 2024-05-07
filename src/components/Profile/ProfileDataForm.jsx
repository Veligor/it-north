import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {saveProfile} from "./../Redux/profile-reducer"

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
        <Form>
      <div> <b>FullName: </b>   <Field type="text" name="FullName" placeholder="Full name"/></div>
        <div><b>Looking for a job: </b> <Field type="checkbox" name="lookingForAJob" /> </div>
  <div><b> My professions skills: </b>     <Field as="textarea" name="lookingForAJobDescription"  placeholder="My professions skills"/> </div>
  <div><b> About me: </b> <Field as="textarea" name="aboutMe"  placeholder="About Me"/> </div>
{/* <div> <button type="submit"  onClick={() => {}}>
            Save
          </button></div> */}
          {/* Contacts:{" "} */}
        {Object.keys(props.profile.contacts).map((key) => {
          return <div><b>{key}:  <div><Field type="text" name={`contacts.${key}`} placeholder={key}/></div></b></div>
        })}
<div> <button type="submit"  onClick={() => {}}>
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