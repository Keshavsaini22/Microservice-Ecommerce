import { Stack } from '@mui/material'
import React from 'react'
import TypographyText from '../../../components/TypographyText'
import HearderBreadcrumb from '../../../components/HearderBreadcrumb'

function ProductHeader() {
    return (
        <Stack>
            <TypographyText text={'Product Details'} fontSize={'20px'} fontWeight={'600'} />
            <HearderBreadcrumb />
        </Stack>
    )
}

export default ProductHeader