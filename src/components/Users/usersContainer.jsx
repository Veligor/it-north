import { connect } from "react-redux";
import {unfollow, follow,  toggleFollowingProgress, getUsersThunkCreator, changeButtonThunkCreator, followThunkCreator, unfollowThunkCreator} from "./../Redux/Users-reducer";
import Users from "./Users";
import React from "react";
import preloader from "./../../photo/images/21.gif";
import { getUsers, userApi } from "../api/api";

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
       />
       </>
     );
   }
 }

const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      totalUserCount: state.usersPage.totalUserCount,
      pageSize: state.usersPage.pageSize,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
      followingInProgress: state.usersPage.followingInProgress
   }
}


const UsersContainer = connect(mapStateToProps, { follow, unfollow, 
 toggleFollowingProgress, getUsersThunkCreator, changeButtonThunkCreator, followThunkCreator, unfollowThunkCreator } )(UsersAPIComponent)

export default UsersContainer;