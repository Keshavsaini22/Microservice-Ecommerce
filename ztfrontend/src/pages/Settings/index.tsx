import { Stack, Box, List, ListItemButton, ListItemIcon, ListItemText, Divider, Avatar, TextField } from '@mui/material'
import React from 'react'
import SettingsHeader from './SettingsHeader'
import SettingsLeft from './SettingsLeft'
import TypographyText from '../../components/TypographyText'
import CustomButton from '../../components/CustomButton'

function Settings() {
    return (
        <Stack m={2}>
            <SettingsHeader />
            <Stack direction={'row'}>
                <SettingsLeft />
                <Divider orientation='vertical' />
                <Stack>
                    <Stack>
                        <TypographyText text={'General Information'} fontSize={''} fontWeight={''} />
                        <TypographyText text={'This is my information'} fontSize={''} fontWeight={''} />
                    </Stack>
                    <Divider />
                    <TypographyText text={'Profile Picture'} fontSize={''} fontWeight={''} />
                    <Stack direction='row' alignItems={'flex-end'} gap={3}>
                        <Stack direction='row' alignItems={'center'} gap={1}>
                            <Avatar sx={{ width: '60px', height: '60px' }} />
                            <Stack>
                                <TypographyText text={'Keshav Saini'} fontSize={''} fontWeight={''} />
                                <TypographyText text={'Role/Title'} fontSize={''} fontWeight={''} />
                                <TypographyText text={'Location'} fontSize={''} fontWeight={''} />
                            </Stack>
                        </Stack>
                        <CustomButton sxprops={{ sx: { width: '100px', height: '37px' } }} variant={'contained'} text={'Change'} />
                        <CustomButton sxprops={{ sx: { width: '100px', height: '37px' } }} variant={'outlined'} text={'Delete'} />
                    </Stack>
                    <Stack direction={'row'} gap={1} flexWrap={'wrap'}>
                        <Box>
                            <Box>
                                <TypographyText text={'UserName'} fontSize={''} fontWeight={''} />
                                <TextField id="outlined-basic" variant="outlined" />
                            </Box>
                            <Box>
                                <TypographyText text={'UserName'} fontSize={''} fontWeight={''} />
                                <TextField id="outlined-basic" variant="outlined" />
                            </Box>
                            <Box>
                                <TypographyText text={'UserName'} fontSize={''} fontWeight={''} />
                                <TextField id="outlined-basic" variant="outlined" />
                            </Box>
                            <Box>
                                <TypographyText text={'UserName'} fontSize={''} fontWeight={''} />
                                <TextField id="outlined-basic" variant="outlined" />
                            </Box>
                            <Box>
                                <TypographyText text={'UserName'} fontSize={''} fontWeight={''} />
                                <TextField id="outlined-basic" variant="outlined" />
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <TypographyText text={'UserName'} fontSize={''} fontWeight={''} />
                                <TextField id="outlined-basic" variant="outlined" />
                            </Box>
                            <Box>
                                <TypographyText text={'UserName'} fontSize={''} fontWeight={''} />
                                <TextField id="outlined-basic" variant="outlined" />
                            </Box>
                            <Box>
                                <TypographyText text={'UserName'} fontSize={''} fontWeight={''} />
                                <TextField id="outlined-basic" variant="outlined" />
                            </Box>
                            <Box>
                                <TypographyText text={'UserName'} fontSize={''} fontWeight={''} />
                                <TextField id="outlined-basic" variant="outlined" />
                            </Box>
                            <Box>
                                <TypographyText text={'UserName'} fontSize={''} fontWeight={''} />
                                <TextField id="outlined-basic" variant="outlined" />
                            </Box>
                        </Box>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Settings