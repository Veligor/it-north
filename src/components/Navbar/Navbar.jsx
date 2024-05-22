import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import Friends from "./Friends"
import { AiOutlineUser } from "react-icons/ai";
import { BiDockTop } from "react-icons/bi";
import { AiOutlineTeam } from "react-icons/ai";
import { BiChat } from "react-icons/bi";
import { FiMusic } from "react-icons/fi";

const Navbar = (props) => {
  let friendsSheet = props.navbarPage.company.map((n) => <Friends name={n.name} key={n.id}/>);
  
  const SelectedClass = ({ isActive }) => (isActive ? s.activeLink : "");
  return ( 
    <nav className={s.nav}>
      <div className={s.item}>
      <AiOutlineUser className={s.icons}/>
        <NavLink to="/profile"className={SelectedClass}>
          Profile
        </NavLink>
      </div>
      <div className={s.item} > 
      <BiChat  className={s.icons}/>
        <NavLink to="/dialogs" className={SelectedClass}>
          Message
        </NavLink>
      </div>
      <div className={s.item}>
      <AiOutlineTeam className={s.icons}/>
        <NavLink to="/users" className={SelectedClass}>
         Users
        </NavLink>
      </div>
      <div className={s.item}>
      <BiDockTop className={s.icons}/>
      <NavLink to="/news" className={SelectedClass}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
      <FiMusic className={s.icons}/>
        <a>Music</a>
      </div>
     
     <div className={s.friend}>
  
    {friendsSheet}
    <div className={s.onlineTitle}>friends online</div>
     </div>
    </nav>
  );
};

export default Navbar;
