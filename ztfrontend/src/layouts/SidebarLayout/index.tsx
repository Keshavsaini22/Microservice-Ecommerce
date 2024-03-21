import { Stack } from '@mui/system'
import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

function SidebarLayout() {
    return (
        <Stack direction={'row'}>
            <Sidebar />
            <Navbar />
        </Stack>
    )
}

export default SidebarLayout