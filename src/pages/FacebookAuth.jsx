import React, { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUserInfo, setToken } from '../redux/features/authSlice'
import { useGetUserProfileQuery } from '../redux/services/facebookApi'

import fbLogo from '../assets/fb.png'
import FacebookLogin from '@greatsumini/react-facebook-login'
import Spinner from '../components/spinner'

const FacebookAuth = () => {
  const [apiDelayed, setApiDelayed] = useState({
    accessToken: '',
    skip: true
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { data, isLoading, isSuccess } = useGetUserProfileQuery(
    apiDelayed.accessToken,
    {
      skip: apiDelayed.skip
    }
  )

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUserInfo(data))
      navigate('/')
    }
  }, [isSuccess])

  const loginSuccess = (res) => {
    console.log(res)
    const { accessToken } = res
    dispatch(setToken(accessToken))
    setApiDelayed({ accessToken: accessToken, skip: false })
  }

  const loginError = () => {
    navigate('/auth')
  }

  if (isLoading) {
    return (
      <div className='h-screen w-full flex items-center justify-center'>
        <Spinner />
      </div>
    )
  }
  return (
    <div className='flex flex-col gap-4 h-screen  items-center justify-center font-bold text-gray-700 text-2xl'>
      <h1>Log in With</h1>
      <FacebookLogin
        appId={import.meta.env.VITE_APP_ID}
        onSuccess={loginSuccess}
        onFail={loginError}
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
