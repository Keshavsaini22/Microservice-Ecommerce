import { Stack } from '@mui/material'
import React from 'react'
import HearderBreadcrumb from '../../../components/HearderBreadcrumb'

function OrderHeader() {
    return (
        <Stack>
            <HearderBreadcrumb text={'Orders Details'} textStyles={{ sx: {}, fontSize: "24px", fontWeight: "600", lineHeight: "28.44px" }} breadcrumb={[{ text: 'Home', link: '/' }, { text: 'Order List', link: '/home/orders' }]} />
        </Stack>
    )
}

export default OrderHeader