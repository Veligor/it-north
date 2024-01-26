const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW"; 
const SET_USERS = "SET-USERS";
  
// props.setUsers(   [
      //    {id:1, photoUrl: "https://www.picsofcelebrities.com/celebrity/movita-castaneda/pictures/large/movita-castaneda-gossip.jpg", followed: true, fullName: "Vladimir", status: "I am boss", location: {city: "Moscow", country: "Russia"} },
      //    {id:2, photoUrl: "https://www.picsofcelebrities.com/celebrity/movita-castaneda/pictures/large/movita-castaneda-gossip.jpg", followed: false, fullName: "Pavel", status: "I god", location: {city: "Samara", country: "Russia"} },
      //    {id:3, photoUrl: "https://www.picsofcelebrities.com/celebrity/movita-castaneda/pictures/large/movita-castaneda-gossip.jpg", followed: true, fullName: "Dima", status: "I lucky", location: {city: "Saratov", country: "Russia"} }
      //  ])

let initialState = {
  users: [
  
  ]
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
          return {
            ...state,
            users: [...state.users, ...action.users ]
          }
        }
    default:
      return state;
  }
};

export default usersReducer;

export let followAC = (userId) => {return {  type: FOLLOW, userId} };
export let unfollowAC = (userId) => { return {   type: UNFOLLOW,   userId } };
export let setUsersAC = (users) => { return {   type: SET_USERS,   users } };
