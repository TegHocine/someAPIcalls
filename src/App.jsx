import React from 'react'
import { Route, Routes } from 'react-router-dom'

import AuthRoute from './components/AuthRoute'

import FacebookAuth from './pages/FacebookAuth'
import Home from './pages/Home'

const App = () => {
  return (
    <h1 className='min-h-screen bg-white text-gray-700'>
      <Routes>
        <Route path='/auth' element={<FacebookAuth />} />
        <Route
          path='*'
          element={
            <AuthRoute>
              <Home />
            </AuthRoute>
          }
        />
      </Routes>
    </h1>
  )
}

export default App
