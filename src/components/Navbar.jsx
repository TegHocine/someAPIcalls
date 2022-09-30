import React from 'react'

import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/features/authSlice'

const Navbar = ({ picture, name }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(logout())
    navigate('/auth')
  }

  return (
    <div className='flex justify-between items-center px-6 py-4 drop-shadow-sm bg-white'>
      <div className='flex items-center gap-2'>
        <img src={picture} alt={name} className='rounded-full ' />
        <span className='font-semibold'>{name}</span>
      </div>
      <button
        onClick={onLogout}
        className='font-semibold border-2 border-gray-700 rounded-full py-1 px-4
      hover:text-white hover:bg-gray-700 transition-all duration-200 ease-linear'>
        Logout
      </button>
    </div>
  )
}

export default Navbar
