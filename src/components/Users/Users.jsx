import React from "react";
import style from "./users.module.css";
import photo from "./../../photo/images/User.png";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { userApi } from "../api/api";

const Users = (props) => {

  let pageCount = Math.ceil(props.totalUserCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <div className={style.main}>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && style.active}
              onClick={(e) => {
                props.onPageChange(p);
              }}>
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
             <NavLink to={'/profile/' + u.id}>
              <img src={u.photos.small != null ? u.photos.small : photo}
                alt="" /></NavLink> 
            </div>
            <div>
              {u.followed ? (
                <button disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => {
                    props.unfollowThunkCreator(u.id)
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => {
                    props.followThunkCreator(u.id)
               

                   
                  }}
                >
                  follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>u.location.country</div>
              <div>u.location.city</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
