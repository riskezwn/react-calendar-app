import React from 'react'

export const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark p-2'>
        <span className='navbar-brand'>Riskezwn</span>
        <button className='btn btn-outline-danger'>
            <span><i className='fas fa-sign-out-alt'></i> Salir</span>
        </button>
    </nav>
  )
}
