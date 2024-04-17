import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import Friends from "./Friends"




const Navbar = (props) => {
  let friendsSheet = props.navbarPage.company.map((n) => <Friends name={n.name} key={n.id}/>);
  
  const SelectedClass = ({ isActive }) => (isActive ? s.activeLink : "");
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile"className={SelectedClass}>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" className={SelectedClass}>
          Message
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users" className={SelectedClass}>
         Users
        </NavLink>
      </div>
      <div className={s.item}>
      <NavLink to="/news" className={SelectedClass}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <a>Music</a>
      </div>
      {friendsSheet}
    </nav>
  );
};

export default Navbar;
