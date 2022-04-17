import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/auth";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((store) => store.auth);

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <nav className="navbar navbar-dark bg-primary justify-content-between align-items-center px-3">
      <div className="navbar-brand">
        <i className="fa-brands fa-react"></i> React Calendar
      </div>
      <div>
        <span className="navbar-text mx-3">{name}</span>
        <button className="btn btn-light" onClick={handleLogout}>
          <span>
            <i className="fas fa-sign-out-alt"></i> Salir
          </span>
        </button>
      </div>
    </nav>
  );
};
