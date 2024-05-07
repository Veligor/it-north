import React, { ChangeEvent } from "react";
import { useEffect } from "react";
import { useState } from "react";

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
    <div>
      {!editMode && (
        <div>
         <b>Status: </b> <span onDoubleClick={activateEditMode}>
            {props.status || "VLADIMIR LUCKY"}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
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
