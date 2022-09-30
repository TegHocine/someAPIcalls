import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAutenticated: localStorage.getItem('accessToken') ? true : false,
  token: localStorage.getItem('accessToken')
    ? localStorage.getItem('accessToken')
    : null,
  user: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : {}
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setState: (state, action) => {
      state = { ...action.payload }
    },
    setUserInfo: (state, action) => {
      state.user = action.payload
      localStorage.setItem('userInfo', JSON.stringify(action.payload))
    },
    setToken: (state, action) => {
      state.isAutenticated = true
      state.token = action.payload
      localStorage.setItem('accessToken', action.payload)
    },
    logout: (state) => {
      state.isAutenticated = false
      state.token = null
      state.user = {}
      localStorage.removeItem('userInfo')
      localStorage.removeItem('accessToken')
    }
  }
})

export const { setState, setUserInfo, setToken, logout } = authSlice.actions

export default authSlice.reducer
