import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
// import MinimalLayout
import MainLayout from 'layout/MainLayout';
import MinimalLayout from 'layout/MinimalLayout';

// login page
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));

const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// dashboard authentication view page import
const RolePage = Loadable(lazy(() => import('views/dashboarPages/role')));
const ResourcePage = Loadable(lazy(() => import('views/dashboarPages/resources')));
const PermissionPage = Loadable(lazy(() => import('views/dashboarPages/permission')));
const ProfilePage = Loadable(lazy(() => import('views/dashboarPages/profile')));

const AllRoutes = [
    {
        path: '/',
        element: <MinimalLayout />,
        children: [
            {
                path: '/',
                element: <AuthLogin3 />
            }
        ]
    },
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/dashboard',
                element: <DashboardDefault />
            }
        ]
    },
    {
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
            },
            {
                path: '/profile',
                element: <ProfilePage />
            }
        ]
    }
];

export default AllRoutes;
