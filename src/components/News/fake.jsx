import React from "react";
import style from "./users.module.css";
 import photo from "./../../photo/images/User.png";
import { NavLink } from "react-router-dom";
import Paginator from "./Paginator";


const Users = (props) => { 

  return (
    <div className={style.main}>
    
    <Paginator  totalUserCount={props.totalUserCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChange={props.onPageChange}/>
      
      <div className={style.containerUser}>


      {props.users.map((u) => (
        <div className={style.users} key={u.id}>
          
            <div className={style.btb}>
             <NavLink to={'/profile/' + u.id}>
              <img src={u.photos.small != null ? u.photos.small : photo}
                alt="user" /></NavLink> 
            </div>
            <div>
              {u.followed ? (
                <button className={style.btnUnfollow} disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => {
                    props.unfollowThunkCreator(u.id)
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button className={style.btn} disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => {
                    props.followThunkCreator(u.id)
                  }}
                >
                  follow 
                </button>
              )}
            </div>
          
          <span>
              <div className={style.name}>{u.name}</div>
              <div>{u.status}</div>          
          </span>
        </div>
      ))}


      </div>
    </div>
  );
};

export default Users;
