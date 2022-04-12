import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth';

export const Navbar = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((store) => store.auth);

  const handleLogout = () => {
    dispatch(startLogout());
  }

  return (
    <nav className='navbar navbar-dark bg-dark p-2 h-30'>
      <span className='navbar-brand'>{name}</span>
      <button
        className='btn btn-outline-danger'
        onClick={handleLogout}
      >
        <span><i className='fas fa-sign-out-alt'></i> Salir</span>
      </button>
    </nav>
  )
}
