import { Box, Button, Stack } from '@mui/material'
import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CustomButton from '../../../components/CustomButton';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
function OrderShip() {
    return (
        <Stack p={2} sx={{ backgroundColor: 'white', borderRadius: '15px' }}>
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
        </Stack>
    )
}

export default OrderShip