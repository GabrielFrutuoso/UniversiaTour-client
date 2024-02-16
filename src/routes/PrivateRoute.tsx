import { Navigate } from 'react-router-dom';

function PrivateRoute({children}: any) {
  const token = localStorage.getItem('@Auth:token');
  
  return token ? children : <Navigate to="/login" />
}

export default PrivateRoute;