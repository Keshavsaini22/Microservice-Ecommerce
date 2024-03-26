import { Box, Stack } from '@mui/system'
import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom';

function SidebarLayout() {
    return (
        <Stack direction={'row'} minHeight={'100vh'}>
            <Sidebar />
            <Stack width={'100%'} sx={{ backgroundColor: 'rgb(246, 248, 255)' }}>
                <Navbar />
                <Outlet />
            </Stack>
        </Stack>
    )
}

export default SidebarLayout