import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {setUserProfile, getStatusCreator, getUserProfileCreator, upDateStatusCreator, savePhoto} from "./../Redux/profile-reducer";
import { useLocation, useNavigate, useParams, useRouteMatch}  from "react-router-dom";
import { compose } from "redux";

const ProfileContainer = (props) => {
  

 let {profileId} = useParams();
 if(!profileId) {
  profileId =  props.yourSelfId
   if(!profileId) {
    profileId = 29369   
}
  }

  React.useEffect(() => {
 
    props.getUserProfileCreator(profileId)
    props.getStatusCreator(profileId)
  }, [profileId]); 
 
  //if(!props.isAuth ) return <Navigate to={"/login"}/>
    return <>
    
    <Profile {...props} savePhoto={props.savePhoto} isOwner={ profileId} profile={props.profile} status={props.status} upDateStatusCreator={props.upDateStatusCreator}/>;
    
    </>
  }
 
 // let AuthRedirectComponent = withAuthRedirect(ProfileContainer) 
  

let mapStateToProps = (state) => ({
profile: state.profilePage.profile,
status: state.profilePage.status,
yourSelfId: state.auth.id,
isAuth: state.auth.isAuth,

})

//export default connect(mapStateToProps, {setUserProfile, getUserProfileCreator}) (AuthRedirectComponent);


export default compose (//withAuthRedirect,
  connect(mapStateToProps, {setUserProfile, getUserProfileCreator, getStatusCreator, upDateStatusCreator, savePhoto}) 
  )(ProfileContainer)
