import axios from "axios";
import React from "react";
import style from "./users.module.css";
import photo from "./../../photo/images/User.png";

class Users extends React.Component {

   constructor(props) {
      super(props) 
         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
         })    
   }

 
render() {
return <div className={style.main}>
      
      {this.props.users.map(u => <div key={u.id}>
      <span>
         <div>
            <img src={ u.photos.small != null ? u.photos.small : photo}/>
         </div>
         <div>
            {u.followed
             ? <button onClick={ () => {this.props.unfollow(u.id)} } >unfollow</button> 
             : <button onClick={ () => {this.props.follow(u.id)} } >follow</button>} 
         </div>
         </span>
         <span>
            <span>
               <div>{u.name}</div>
               <div>{u.status}</div>
               </span>
               <span>
                  <div>
               u.location.country
               </div>
               <div>
               u.location.city
                  </div>
                  </span>
         </span>
      </div>)}
   </div>
}
}

export default Users;