import React from "react";
import style from "./users.module.css";
import photo from "./../../photo/images/User.png";
import { NavLink } from "react-router-dom";
import { VirtuosoGrid } from "react-virtuoso";
import { useState } from "react";


function Users(props) {
const [page, setPage] = useState(1);
const [size, setSize] = useState(4);

function loadMore () {
  setPage((page) => page + 1);
   console.log(page)
   props.scrollInfiniteThunkCreator(page, size)
 };
 React.useEffect(() => {
 loadMore(page, size)
 }, [props.scrollInfiniteThunkCreator])


 const [isScrolling, setIsScrolling] = useState(false);
  return (
    <>
      <VirtuosoGrid
        style={{ height: 800}}
        data={props.users}
        totalCount={10000}
        context={{ isScrolling }}
        listClassName={style.containerUser}
        endReached={ loadMore }
        components={{ Footer }}
       // increaseViewportBy={200}
        itemContent={(index, u) =>   
          
          <div className={style.users} key={u.id}>
          
          <div className={style.btb}>
           <NavLink to={'/profile/' + u.id}>
            <img src={u.photos.small != null ? u.photos.small : photo }
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
   
    }
      />
    
    </>
  );
}
const Footer = () => {
  return (
    <div
      style={{
        padding: '2rem',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      Loading...
    </div>
  )
}

export default Users;
