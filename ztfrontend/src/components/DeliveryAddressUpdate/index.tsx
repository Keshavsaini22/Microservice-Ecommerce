import { Box, Stack } from '@mui/system'
import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
interface props {
    header: string,
    address: string
}
function DeliveryAddressUpdate(props: props) {
    return (
        <Stack direction={'row'} gap={1}>
            <CheckCircleIcon sx={{ color: '#94a4ff' }} />
            <Stack gap={0.5}>
                <Box sx={{ fontSize: '14px', fontWeight: '600' }}>{props.header}</Box>
                <Box sx={{ fontSize: '13px' }}>{props.address}</Box>
            </Stack>
        </Stack>
    )
}

export default DeliveryAddressUpdate