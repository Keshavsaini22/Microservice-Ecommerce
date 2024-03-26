import { Stack } from '@mui/material'
import React from 'react'
import TypographyText from '../../../components/TypographyText'
import HearderBreadcrumb from '../../../components/HearderBreadcrumb'

function ProductHeader() {
    return (
        <Stack>
            <HearderBreadcrumb text={'Add Product'} textStyles={{ sx: {}, fontSize: "24px", fontWeight: "600", lineHeight: "28.44px" }} breadcrumb={[{ text: 'Home', link: '/' }, { text: 'All Products', link: '/home/dashboard' }]} />
        </Stack>
    )
}

export default ProductHeader