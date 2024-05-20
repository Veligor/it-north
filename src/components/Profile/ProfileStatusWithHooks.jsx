import React, { ChangeEvent } from "react";
import { useEffect } from "react";
import { useState } from "react";
import s from "./ProfileState.module.css" 

const ProfileStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true); 
  };
  const deActivateEditMode = () => {
    setEditMode(false);
    props.upDateStatusCreator(status);
  };
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div className={s.status}>
      {!editMode && (
        <div >
         <b>Status: </b> <span className={s.span} onDoubleClick={activateEditMode}>
            {props.status || "VLADIMIR LUCKY" }
          </span>
        </div>
      )}
      {editMode && (
        <div className={s.container}>
          <input
          className={s.textField}
            onBlur={deActivateEditMode}
            onChange={onStatusChange}
            autoFocus={true}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
