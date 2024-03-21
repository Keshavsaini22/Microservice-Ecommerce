import React, { Suspense } from 'react'
import SuspenseLoader from '../components/SuspenseLoader';
import { Navigate, RouteObject } from 'react-router';
import SidebarLayout from '../layouts/SidebarLayout';
import Dashboard from '../pages/Dashboard';

// const Loader = (Component) => (props) =>
// (
//     <Suspense fallback={<SuspenseLoader />}>
//         <Component {...props} />
//     </Suspense>
// );

const routes: RouteObject[] = [
    {
        path: '/',
        element: <SidebarLayout />,
        children: [
            {
                path: '',
                element: <Navigate to="dashboard" replace />
            },
            {
                path: 'dashboard',
                element: <Dashboard />
            },
            // {
            //     path: 'messenger',
            //     element: <Messenger />
            // }
        ]
    },
]

export default routes