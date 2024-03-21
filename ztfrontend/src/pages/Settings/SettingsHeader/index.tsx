import { Box, Stack } from '@mui/material'
import React from 'react'
import CustomButton from '../../../components/CustomButton'
import TypographyText from '../../../components/TypographyText'

function SettingsHeader() {
    return (
        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Stack gap={1}>
                <Box sx={{ fontSize: '42px', fontWeight: '600' }}>Settings</Box>
                <TypographyText text={'Manage your account settings'} fontSize={'18px'} fontWeight={''} />
            </Stack>
            <Stack direction={'row'} gap={3}>
                <CustomButton sxprops={{ sx: { width: '160px', height: '48px' } }} variant="contained" text="Save changes" />
                <CustomButton sxprops={{ sx: { width: '160px', height: '48px' } }} variant="outlined" text="Cancel" />
            </Stack>
        </Stack>
    )
}

export default SettingsHeader