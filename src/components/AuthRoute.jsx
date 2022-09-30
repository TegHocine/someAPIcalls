import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const AuthRoute = ({ children }) => {
  const { isAutenticated } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  useEffect(() => {
    if (!isAutenticated) navigate('/auth')
  }, [isAutenticated])

  return children
}

export default AuthRoute
