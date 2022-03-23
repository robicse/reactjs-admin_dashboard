import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
// import MinimalLayout from 'layout/MinimalLayout';
import MainLayout from 'layout/MainLayout';
// login option 3 routing
const RolePage = Loadable(lazy(() => import('views/dashboarPages/role')));
const ResourcePage = Loadable(lazy(() => import('views/dashboarPages/resources')));
const PermissionPage = Loadable(lazy(() => import('views/dashboarPages/permission')));
// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/dashboard',
    element: <MainLayout />,
    children: [
        {
            path: '/role',
            element: <RolePage />
        },
        {
            path: '/resource',
            element: <ResourcePage />
        },
        {
            path: '/permission',
            element: <PermissionPage />
        }
    ]
};

export default AuthenticationRoutes;
