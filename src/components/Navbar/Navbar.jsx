import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = (props) => {
  const SelectedClass = ({ isActive }) => (isActive ? s.activeLink : "");
  return (
  <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" className={SelectedClass}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" className={SelectedClass}>Message</NavLink>
      </div>
      <div className={s.item}>
        <a>News</a>
      </div>
      <div className={s.item}>
        <a>Music</a>
      </div>
    </nav>
  );
};

export default Navbar;
 