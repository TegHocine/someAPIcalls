import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'

const Home = () => {
  const auth = useSelector((state) => state.auth)
  const {
    user: { name, picture }
  } = auth

  return (
    <div>
      <Navbar name={name} picture={picture.data.url} />
    </div>
  )
}

export default Home
