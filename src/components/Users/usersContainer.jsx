import { connect } from "react-redux";
import {unfollow, follow,  toggleFollowingProgress, getUsersThunkCreator, changeButtonThunkCreator, followThunkCreator, unfollowThunkCreator, scrollInfiniteThunkCreator} from "./../Redux/Users-reducer";
import Users from "./Users";
import React from "react";
import preloader from "./../../photo/images/21.gif";
import {users, getTotalUserCount, getPageSize, getCurrentPage, getIsFetching, getFollowingInProgress} from "./../Redux/selectors-users"

class UsersAPIComponent extends React.Component {
   componentDidMount() {
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
   }
   onPageChange = (pageNumber) => {
    this.props.changeButtonThunkCreator(pageNumber, this.props.pageSize)
   }; 
 
   render() {
     return (
      <>
      
      { this.props.isFetching ? <img src={preloader}/> : null }
       <Users
         onPageChange={this.onPageChange}
         totalUserCount={this.props.totalUserCount}
         pageSize={this.props.pageSize}
         currentPage={this.props.currentPage}
         unfollow={this.props.unfollow}
         follow={this.props.follow}
         users={this.props.users}
         isFetching={this.props.isFetching}
         //toggleFollowingProgress={this.props.toggleFollowingProgress}
         followingInProgress={this.props.followingInProgress}
         unfollowThunkCreator={this.props.unfollowThunkCreator}
         followThunkCreator={this.props.followThunkCreator}
         scrollInfiniteThunkCreator={this.props.scrollInfiniteThunkCreator}
        // infiniteUser={this.props.infiniteUser}
        getUsersThunkCreator={this.props.getUsersThunkCreator}
       />
       </>
     );
   }
 }

const mapStateToProps = (state) => {
   return {
      infiniteUser: state.usersPage.infiniteUser,
      users: users(state),
      totalUserCount: getTotalUserCount(state),
      pageSize: getPageSize(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state)
   }
}


const UsersContainer = connect(mapStateToProps, { follow, unfollow, 
 toggleFollowingProgress, getUsersThunkCreator, changeButtonThunkCreator, followThunkCreator, unfollowThunkCreator,scrollInfiniteThunkCreator } )(UsersAPIComponent)

export default UsersContainer;