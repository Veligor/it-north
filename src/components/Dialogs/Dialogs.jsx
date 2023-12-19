import React from "react";
import s from "./Dialog.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.human}>
        <div className={`${s.dialog} ${s.active}`}>Vladimir</div>
        <div className={s.dialog}>Mariya</div>
        <div className={s.dialog}>Savva</div>
        <div className={s.dialog}>Varvara</div>
        <div className={s.dialog}>Nikolai</div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>Hi are you</div>
        <div className={s.message}>Welcome</div>
        <div className={s.message}>Forever together</div>
        <div className={s.message}>leader</div>
      </div>
    </div>
  );
};
export default Dialogs;
