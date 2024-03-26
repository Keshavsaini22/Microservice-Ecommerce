import { Box, Button, Stack } from '@mui/material'
import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CustomButton from '../../../components/CustomButton';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import OrderInfoCard from '../../../components/OrderInfoCard';
function OrderShip() {
    return (
        <Stack gap={1} p={2} sx={{ backgroundColor: 'white', borderRadius: '15px' }}>
            <Stack direction={'row'} gap={3}>
                <Box sx={{ fontSize: '18px', fontWeight: '700' }}>Orders ID: #6735</Box>
                <Box sx={{ backgroundColor: 'rgb(255,183,89)', padding: '5px', fontSize: '14px', fontWeight: '600', borderRadius: '6px' }}>Pending</Box>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'}>
                <Box display={'flex'} alignItems={'center'}><CalendarMonthIcon />&nbsp; Feb 16,2022 - Feb 20,2022</Box>
                <Stack direction={'row'} gap={2}>
                    <Button variant="contained" sx={{ width: '70px', height: '48px' }}  ><LocalPrintshopOutlinedIcon /></Button>
                    <CustomButton onclick={() => { }} sxprops={{ sx: { width: '100px', height: '48px' } }} variant="contained" text="Save" />
                </Stack>
            </Stack>
            <Box display={'flex'} gap={2} flexWrap={'wrap'}>
                <OrderInfoCard icon={<PersonOutlinedIcon sx={{ fontSize: '35px' }} />} header={'Customer'} line1={'Full Name : Shisti@gmail.com'} line2={' Name : Shisti@gmail.com'} line3={'Phone : 9324292424'} />
                <OrderInfoCard icon={<ShoppingBagOutlinedIcon sx={{ fontSize: '35px' }} />} header={'Order Info'} line1={'Full Name : Shisti@gmail.com'} line2={' Name : Shisti@gmail.com'} line3={'Status : Pending'} />
                <OrderInfoCard icon={<ShoppingBagOutlinedIcon sx={{ fontSize: '35px' }} />} header={'Deliver to'} line1={'Full Name : Shisti@gmail.com'} line2={' Name : Shisti@gmail.com'} line3={'Status : Pending'} />
            </Box>
        </Stack>
    )
}

export default OrderShip