import { Box, Stack } from '@mui/material'
import React from 'react'
import CircleIcon from '@mui/icons-material/Circle';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeliveryAddressUpdate from '../../../components/DeliveryAddressUpdate';
import DashLine from '../../../components/DashLine';
function Header() {
    return (
        <Stack gap={2}>
            <Stack direction={'row'} justifyContent={'space-between'}>
                <Stack direction={'row'} color={'#adadb9'} alignItems={'center'}>Order ID: <Box fontSize={'19px'} color={'black'} fontWeight={'700'} px={'8px'}>9999999079</Box><ContentCopyIcon sx={{ fontSize: '20px' }} /> </Stack>
                <Box sx={{ color: '#2367fc' }}><CircleIcon sx={{ color: '#2367fc', fontSize: '10px' }} /> In progress</Box>
            </Stack>
            <Stack gap={3} justifyContent={'space-around'} alignItems={'start'} direction={'row'} p={3} sx={{ backgroundColor: 'white', borderRadius: '10px' }}>
                <DeliveryAddressUpdate header={'At Pickup location'} address={'Texas,6767'} />
                <DashLine />
                <DeliveryAddressUpdate header={'Departed from Pickup Location'} address={'Texas,6767'} />
                <DashLine />
                <DeliveryAddressUpdate header={'Arrived Destination'} address={'Texas,6767'} />
                <DashLine />
                <DeliveryAddressUpdate header={'Delivered'} address={'Texas,6767'} />
            </Stack>
        </Stack>
    )
}

export default Header