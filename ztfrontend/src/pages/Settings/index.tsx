import { Stack, Box, List, ListItemButton, ListItemIcon, ListItemText, Divider, Avatar, TextField } from '@mui/material'
import React from 'react'
import SettingsHeader from './SettingsHeader'
import SettingsLeft from './SettingsLeft'
import TypographyText from '../../components/TypographyText'
import CustomButton from '../../components/CustomButton'
import PersonalInfo from './PersonalInfo'

function Settings() {
    return (
        <Stack p={4} sx={{ backgroundColor: 'rgb(246, 248, 255)' }} height={'100%'}>
            <SettingsHeader />
            <Stack direction={'row'} sx={{ backgroundColor: 'white', borderRadius: '15px' }} p={4} marginTop={4}>
                <SettingsLeft />
                <Divider orientation='vertical' />
                <PersonalInfo />
            </Stack>
        </Stack>
    )
}

export default Settings