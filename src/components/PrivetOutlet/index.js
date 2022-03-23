import { Navigate, Outlet } from 'react-router-dom';
// import useAuth from '../hooks/useAuth';

export default function PrivateOutlet() {
    //   const auth = useAuth();
    const auth = false;
    console.log('auth false');
    return auth ? <Outlet /> : <Navigate to="/" />;
}
