import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {setUserProfile, getStatusCreator, getUserProfileCreator, upDateStatusCreator} from "./../Redux/profile-reducer";
import { useLocation, useNavigate, useParams, useRouteMatch}  from "react-router-dom";
import { compose } from "redux";

const ProfileContainer = (props) => {
  

 let {profileId} = useParams();
 if(!profileId) {
  // profileId = 2  
     profileId = 29369  
  }
  console.log(profileId)
  React.useEffect(() => {
    props.getUserProfileCreator(profileId)
    props.getStatusCreator(profileId)
  }, [profileId]); 

  //if(!props.isAuth ) return <Navigate to={"/login"}/>
    return <>
    
    <Profile {...props} profile={props.profile} status={props.status} upDateStatusCreator={props.upDateStatusCreator}/>;
    </>
  }
 
 // let AuthRedirectComponent = withAuthRedirect(ProfileContainer) 
  

let mapStateToProps = (state) => ({
profile: state.profilePage.profile,
status: state.profilePage.status
})

//export default connect(mapStateToProps, {setUserProfile, getUserProfileCreator}) (AuthRedirectComponent);


export default compose (//withAuthRedirect,
  connect(mapStateToProps, {setUserProfile, getUserProfileCreator, getStatusCreator, upDateStatusCreator}) 
  )(ProfileContainer)
