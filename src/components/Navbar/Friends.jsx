import React from "react";
import s from "./Friends.module.css";

let Friends = (props) => {
   return (
     <div>
       <div className={s.circle}>
         <img src="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/02/05091656/Picture-1.png" />
         <div>
           <span>{props.name}</span>
         </div>
       </div>
     </div>
   );
 };
 

 export default Friends;