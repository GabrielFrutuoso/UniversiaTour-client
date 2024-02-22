import { Route, Routes } from 'react-router-dom'
import { MainPage } from '../pages/Main.page'
import { DestinyPage } from '../pages/Destiny.page'
import { Login } from '../pages/Login.page'
import { RegisterPage } from '../pages/Register.page'
import { ProfilePage } from '../pages/Profile.page'
import PrivateRoute from './PrivateRoute'
import { useAuth } from '../hooks/useAuth'
import { useQuery } from '@tanstack/react-query'

export const AppRoutes = () => {

  const { findUserByEmail } = useAuth()

  const getUser = async () => {
    const token = localStorage.getItem('@Auth:token')
    const email = localStorage.getItem('@Auth:user')
    if (token && email) {
      findUserByEmail(JSON.parse(localStorage.getItem("@Auth:user") as string))
    }
}

useQuery({ queryKey: ["user"], queryFn: getUser })

  return (
    <>   
      <Routes>    
        <Route path="/" element={<MainPage />} />
        <Route path="/destiny" element={<DestinyPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
      </Routes> 
    </>

  )
}
