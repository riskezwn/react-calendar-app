import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiOpenModal } from "../../actions/ui";

export const AddNewFab = () => {
  const dispatch = useDispatch();
  const { activeEvent } = useSelector((store) => store.calendar);

  const handleAddNew = () => {
    dispatch(uiOpenModal());
  };

  return (
    <button className="btn btn-primary fab" onClick={handleAddNew}>
      <i className={`fas ${activeEvent ? "fa-edit" : "fa-plus"}`}></i>
    </button>
  );
};
