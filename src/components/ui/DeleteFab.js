import React from "react";
import { useDispatch } from "react-redux";
import { eventDeleted } from "../../actions/events";

export const DeleteFab = () => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(eventDeleted());
  };

  return (
    <button className="btn btn-danger fab-danger" onClick={handleDelete}>
      <span>
        <i className="fas fa-trash"></i> Borrar evento
      </span>
    </button>
  );
};
