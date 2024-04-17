import {userApi} from "./../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW"; 
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const TOTAL_USER_COUNT = "TOTAL-USER-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE-FOLLOWING-IN-PROGRESS";

let initialState = {
   users: [],
   pageSize: 5,
   totalUserCount: 0,
   currentPage: 1,
   isFetching: false,
   followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if(u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })  
      }
      case UNFOLLOW:
        return {
          ...state,
          users: state.users.map(u => {
            if(u.id === action.userId) {
              return {...u, followed: false}
            }
            return u;
          })  
        }
        case SET_USERS: {
          return { ...state,  users: [...action.users ]  }
        }
        case SET_CURRENT_PAGE: {
          return {...state, currentPage: action.currentPage}
        }
        case TOTAL_USER_COUNT: {
          return {...state, totalUserCount: action.totalCount}
        }
        case TOGGLE_IS_FETCHING: {
          return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_FOLLOWING_IN_PROGRESS: {
          return {...state,
             followingInProgress: action.isFetching 
            ? [...state.followingInProgress, action.userId ]
            : state.followingInProgress.filter(id => id != action.userId)  }
        }
    default:
      return state;
  }
};


export const getUsersThunkCreator = (currentPage, pageSize) =>  {

  return (dispatch) => {
      dispatch(setIsFetching(true))
      userApi.getUsers(currentPage, pageSize)
      .then((response) => {
        dispatch(setIsFetching(false))
        dispatch(setUsers(response.items));
        dispatch(setTotalUserCount(response.totalCount));
      });
   }
}
export const changeButtonThunkCreator = (pageNumber, pageSize) =>  {

  return (dispatch) => {
    dispatch(setIsFetching(true))
    dispatch(setCurrentPage(pageNumber));
   userApi.getUsers(pageNumber, pageSize)
   .then((response) => {
    dispatch(setIsFetching(false))
    dispatch(setUsers(response.items));
      });
   }
}
export const unfollowThunkCreator = (userId) =>  {

  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    userApi.unfollow(userId).then(response => {
     if(response.data.resultCode === 0) {
      dispatch(unfollow(userId))
     }
     dispatch(toggleFollowingProgress(false, userId))
    })
}
}
export const followThunkCreator = (userId) =>  {

  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    userApi.follow(userId).then(response => {
     if(response.data.resultCode === 0) {
      dispatch(follow(userId))
     }
     dispatch(toggleFollowingProgress(false, userId))
    })
}
}


export default usersReducer;

export let follow = (userId) => {return {  type: FOLLOW, userId} };
export let unfollow = (userId) => { return {   type: UNFOLLOW,   userId } };
export let setUsers = (users) => { return {   type: SET_USERS,   users } };
export let setCurrentPage = (currentPage) => { return {   type: SET_CURRENT_PAGE,   currentPage } };
export let setTotalUserCount = (totalCount) => { return {   type: TOTAL_USER_COUNT,   totalCount } };
export let setIsFetching = (isFetching) => { return {   type: TOGGLE_IS_FETCHING,   isFetching } };
export let toggleFollowingProgress = (isFetching, userId) => { return {   type: TOGGLE_FOLLOWING_IN_PROGRESS,   isFetching , userId} };
