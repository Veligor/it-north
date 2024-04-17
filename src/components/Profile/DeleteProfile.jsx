import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile, updateStatus, getStatus } from "./../../Redux/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { withAuthNavigate } from "../../hoc/withAuthNavigate";
import { compose } from "redux";

// 29369

class ProfileContainer extends React.Component {
  componentDidMount() {
    let profileId = this.props.router.params.profileId;
    if (!profileId) {
      
      profileId = this.props.authorizedUserId;
      // if (!profileId) {
      //   this.props.history.push('./login')
      // }
    }
    this.props.getUserProfile(profileId);
    
    this.props.getStatus(profileId)
  }

  render() {  
    // console.log('Render profile')
    if (!this.props.isAuth) return <Navigate to={"/login"} />;
    return (
      <div>
        <Profile {...this.props}
         profile={this.props.profile}
          status={this.props.status}
         updateStatus={this.props.updateStatus}/>
      </div>
    );
  }
}


function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}



let mapStateToProps = (state) => {
// console.log('MapStateToProps Profilejj')
return ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth
});
}

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  withAuthNavigate
)
(ProfileContainer)