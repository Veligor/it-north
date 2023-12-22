import React from "react";
import s from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
    return <div> 
             <div>
               <img src="https://media-server.clubmed.com/image/jpeg/1024/auto/crop/center/70/https%3A%2F%2Fns.clubmed.com%2FFEAM%2FMarketing%2FOmnichannel%2FSEO%2FDestinations%2FThailande%2FGettyImages-910547262.jpg"></img>
              </div> 
             <div className={s.description}>ava + description</div>
             </div>
}

export default ProfileInfo;