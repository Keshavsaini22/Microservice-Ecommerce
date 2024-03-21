import { Stack } from '@mui/system'
import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom';

function SidebarLayout() {
    return (
        <Stack direction={'row'}>
            <Sidebar />
            <Stack>
                <Navbar />
                <Outlet />
            </Stack>
        </Stack>
    )
}

export default SidebarLayout