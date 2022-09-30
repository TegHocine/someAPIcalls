import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/authSlice'
import { facebookApi } from './services/facebookApi'

export const store = configureStore({
  reducer: {
    [facebookApi.reducerPath]: facebookApi.reducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(facebookApi.middleware)
})
