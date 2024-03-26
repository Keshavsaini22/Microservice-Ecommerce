import { Stack } from '@mui/material'
import React from 'react'
import OrderHeader from './OrderHeader'
import OrderShip from './OrderShip'
import OrderFooter from './OrderFooter'

function OrderDetails() {
    return (
        <Stack p={4} gap={2} sx={{}} >
            <OrderHeader />
            <OrderShip />
            <OrderFooter/>
        </Stack>
    )
}

export default OrderDetails