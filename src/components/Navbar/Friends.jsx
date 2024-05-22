import React from "react";
import s from "./Friends.module.css";
import { IoMdPhonePortrait } from "react-icons/io";

let Friends = (props) => {
   return (
   
<div className={s.friend}>
  
    
       
       <IoMdPhonePortrait className={s.icons}/>
       <span className={s.name}>{props.name}</span>
        
           {/* <span>{props.name}</span> */}
         
       
     </div>

    
   );
 };
 

 export default Friends;