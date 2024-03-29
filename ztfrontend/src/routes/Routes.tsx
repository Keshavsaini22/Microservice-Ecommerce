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
import OrderList from '../pages/OrderList';
import OrderDetails from '../pages/OrderDetails';
import DeliveryOrder from '../pages/DeliveryOrder';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

// const Loader = (Component) => (props) =>
// (
//     <Suspense fallback={<SuspenseLoader />}>
//         <Component {...props} />
//     </Suspense>
// );
interface ProtectedProps {
    children: React.ReactNode
}

const PrivateRoute = (props: ProtectedProps) => {
    const isAuth = localStorage.getItem("token");
    return isAuth === null ? <Navigate to="/" /> : <>{props.children}</>;
};

const routes: RouteObject[] = [
    {
        path: '',
        element: <BaseLayout />,
        children: [
            {
                path: '/',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
        ]
    },
    {
        path: '/',
        element: <PrivateRoute><SidebarLayout /></PrivateRoute>,
        children: [
            {
                path: '',
                element: <Navigate to="home" replace />
            },
            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'allproducts',
                element: <ProductDisplayAdmin />
            },
            {
                path: 'addproduct',
                element: <ProductAdd />
            },
            {
                path: 'settings',
                element: <Settings />
            },
            {
                path: 'orders',
                element: <OrderList />
            },
            {
                path: 'orderdetails',
                element: <OrderDetails />
            },
            {
                path: 'delivery',
                element: <DeliveryOrder />
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />,

    },
]

export default routes