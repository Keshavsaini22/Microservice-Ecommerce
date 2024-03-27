import { Box, Stack } from '@mui/material'
import React, { ReactElement } from 'react'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
interface props {
    tag: string,
    icon: ReactElement<any, any>
}
function CategoryCard(props: props) {
    return (
        <Stack alignItems={'center'} gap={1} direction={'row'} justifyContent={'center'} p={1} sx={{ backgroundColor: 'rgb(246,247,248)', border: '1px solid rgb(246,247,248)', borderRadius: '5px', '&:hover': { cursor: 'pointer', border: '1px solid' } }}>
            <Box p={0.5} sx={{ backgroundColor: 'white', borderRadius: '5px' }} >{props.icon}</Box>
            <Box sx={{ fontWeight: '600', fontSize: '17px' }}>{props.tag}</Box>
        </Stack>
    )
}

export default CategoryCard