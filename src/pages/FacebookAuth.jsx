import React from 'react'

import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUserInfo, setToken } from '../redux/features/authSlice'

import fbLogo from '../assets/fb.png'

import FacebookLogin from '@greatsumini/react-facebook-login'

const appId = import.meta.env.VITE_APP_ID

const FacebookAuth = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const loginSuccess = (res) => {
    const { accessToken } = res
    dispatch(setToken(accessToken))
  }
  const ProfileUser = (res) => {
    console.log('Get Profile Success!', res)
    dispatch(setUserInfo(res))
    navigate('/')
  }
  const loginError = () => {
    alert('Login Failed!')
  }

  return (
    <div className='flex flex-col gap-4 h-screen  items-center justify-center font-bold text-gray-700 text-2xl'>
      <h1>Log in With</h1>
      <FacebookLogin
        appId={appId}
        onSuccess={loginSuccess}
        onFail={loginError}
        onProfileSuccess={ProfileUser}
        render={({ onClick }) => (
          <button
            onClick={onClick}
            className='h-fit border border-gray-400 flex items-center justify-center gap-1.5 py-3 px-4 
            w-56 rounded-md font-bold text-gray-700 text-base drop-shadow-md bg-white hover:bg-slate-50'>
            <img src={fbLogo} alt='facebook' className='w-6 h-6' />
            Facebook
          </button>
        )}
      />
    </div>
  )
}

export default FacebookAuth
