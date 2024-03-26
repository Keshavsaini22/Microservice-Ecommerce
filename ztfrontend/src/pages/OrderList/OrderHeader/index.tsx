import { Stack } from '@mui/material'
import React from 'react'
import HearderBreadcrumb from '../../../components/HearderBreadcrumb'

function OrderHeader() {
    return (
        <Stack>
            <HearderBreadcrumb text={'Orders List'} textStyles={{ sx: {}, fontSize: "24px", fontWeight: "600", lineHeight: "28.44px" }} breadcrumb={[{ text: 'Home', link: '/' }]} />
        </Stack>
    )
}

export default OrderHeader