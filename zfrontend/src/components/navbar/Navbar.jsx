import React from 'react'
import { AppBar, Box, InputAdornment, TextField, Toolbar, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <AppBar sx={{ backgroundColor: 'gainsboro' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <NavLink activeClassName="active" to="" style={{ textDecoration: 'none' }}>
                    <Box className="logo-label" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: (theme) => theme.palette.grey[700], "&:hover": { color: "#191919" }, }}>
                        <HomeIcon sx={{ height: '24px', width: '24px' }} />
                        <Typography fontSize={'12px'} >Home</Typography></Box>
                </NavLink>
                <NavLink activeClassName="active" to="" style={{ textDecoration: 'none' }}>
                    <Box className="logo-label" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: (theme) => theme.palette.grey[700], "&:hover": { color: "#191919" }, }}>
                        <HomeIcon sx={{ height: '24px', width: '24px' }} />
                        <Typography fontSize={'12px'} >Products</Typography></Box>
                </NavLink>
                <NavLink activeClassName="active" to="" style={{ textDecoration: 'none' }}>
                    <Box className="logo-label" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: (theme) => theme.palette.grey[700], "&:hover": { color: "#191919" }, }}>
                        <HomeIcon sx={{ height: '24px', width: '24px' }} />
                        <Typography fontSize={'12px'} >Dashboard</Typography></Box>
                </NavLink>
                <NavLink activeClassName="active" to="" style={{ textDecoration: 'none' }}>
                    <Box className="logo-label" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: (theme) => theme.palette.grey[700], "&:hover": { color: "#191919" }, }}>
                        <HomeIcon sx={{ height: '24px', width: '24px' }} />
                        <Typography fontSize={'12px'} >Logout</Typography></Box>
                </NavLink>
            </Toolbar>
        </AppBar>

    )
}

export default Navbar