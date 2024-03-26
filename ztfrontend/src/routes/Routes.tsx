import React, { Suspense } from 'react'
import SuspenseLoader from '../components/SuspenseLoader';
import { Navigate, RouteObject } from 'react-router';
import SidebarLayout from '../layouts/SidebarLayout';
import Dashboard from '../pages/Dashboard';
import Settings from '../pages/Settings';
import BaseLayout from '../layouts/BaseLayout';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import ProductAdd from '../pages/ProductAdd';
import ProductDisplayAdmin from '../pages/ProductDisplayAdmin';

// const Loader = (Component) => (props) =>
// (
//     <Suspense fallback={<SuspenseLoader />}>
//         <Component {...props} />
//     </Suspense>
// );

const routes: RouteObject[] = [
    {
        path: '/',
        element: <BaseLayout />,
        children: [
            {
                path: '',
                element: <Navigate to="login" replace />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
        ]
    },
    {
        path: '/home',
        element: <SidebarLayout />,
        children: [
            {
                path: '',
                element: <Navigate to="settings" replace />
            },
            {
                path: 'dashboard',
                element: <ProductDisplayAdmin />
            },
            {
                path: 'addproduct',
                element: <ProductAdd />
            },
            {
                path: 'settings',
                element: <Settings />
            }
        ]
    },
]

export default routes