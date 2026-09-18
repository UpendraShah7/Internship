import { createBrowserRouter, Navigate } from 'react-router-dom';
import ProtectedRoute from '../modules/auth/components/ProtectedRoute';
import RegisterPage from '../modules/auth/pages/RegisterPage';
import LoginPage from '../modules/auth/pages/LoginPage';
import UsersPage from '../modules/auth/pages/UserPage';


const router = createBrowserRouter([
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/users',
    element: (
      <ProtectedRoute>
        <UsersPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '*',
    element: <Navigate to="/register" replace />,
  },
]);

export default router;