import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialog.module.css";
import { FaUser } from "react-icons/fa";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.messeger}>
      <div className={s.iconsContainer}>
        <FaUser className={s.icons} />
      </div>
      <NavLink to={path} className={s.dialogName}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;

{/* <NavLink to={path} className={`${s.dialog} ${s.active}`}> */}
