import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainPage } from '../pages/Main.page'
import { DestinyPage } from '../pages/Destiny.page'
import { Login } from '../pages/Login.page'
import { RegisterPage } from '../pages/Register.page'
import { ProfilePage } from '../pages/Profile.page'
import PrivateRoute from './PrivateRoute'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/destiny" element={<DestinyPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
        </Routes>
    </BrowserRouter>
  )
}
