import { Box, Stack } from '@mui/material'
import React from 'react'
import AddButton from '../../assets/AddButton.png'

interface props {
    image: string,
    price: string,
    name: string
}
function HomeProductCard(props: props) {
    return (
        <Stack gap={0.3} width={'180px'} height={'270px'} justifyContent={'center'} >
            <Box className='image' sx={{ height: '150px', width: '150px', position: 'relative' }}>
                <img src='https://clipart-library.com/images_k/smartphone-png-transparent/smartphone-png-transparent-4.jpg' alt="" />
                <Box component={'button'} sx={{ padding: '0px', border: 'none', background: 'none', position: 'absolute', right: '-15px', top: '-20px', '&:hover': { cursor: 'pointer' } }}><img src={AddButton}></img></Box>
            </Box>
            <Box sx={{ fontSize: '15px', fontWeight: '700' }}>{props.price}</Box>
            <Box>{props.name}</Box>
            <Box sx={{ color: 'green', fontWeight: '600', fontSize: '14px' }}>70% off</Box>
        </Stack>

    )
}

export default HomeProductCard