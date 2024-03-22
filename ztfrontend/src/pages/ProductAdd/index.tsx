import { Stack } from '@mui/material'
import React from 'react'
import TypographyText from '../../components/TypographyText'
import HearderBreadcrumb from '../../components/HearderBreadcrumb'

function ProductAdd() {
    return (
        <>
            <Stack>
                <TypographyText text={'Product Details'} fontSize={''} fontWeight={''} />
                <HearderBreadcrumb/>
            </Stack>
        </>
    )
}

export default ProductAdd