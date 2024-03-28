import { Avatar, Box, Button, IconButton, Stack } from '@mui/material'
import React, { useRef } from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeProductCard from '../../../components/HomeProductCard';
import "react-multi-carousel/lib/styles.css";
import './CategoryWiseProduct.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function CategoryWiseProduct() {
    const scroll = useRef<HTMLDivElement>(null)
    const handleScroll = (offset: number) => {
        if (scroll.current?.scrollLeft !== (null || undefined))
            scroll.current.scrollLeft += offset
    }

    return (
        <Stack gap={2} width={'100%'} sx={{ backgroundColor: 'white', borderRadius: '10px', overflow: 'hidden', boxSizing: 'border-box' }}>
            <Stack m={2} direction={'row'} gap={4} alignItems={'center'}>
                <Stack direction={'row'} gap={1} alignItems={'center'}>
                    <Avatar sx={{ width: '50px', height: '50px' }} alt="Travis Howard" src="" />
                    <Box fontWeight={'600'} fontSize={'25px'}>Mobile</Box>
                </Stack>
                <IconButton ><NavigateNextIcon sx={{ fontSize: '30px' }} /></IconButton>
            </Stack>
            <Stack gap={1} direction={'row'} width={'100%'} sx={{ overflow: 'hidden' }} alignItems={'center'} >
                <IconButton sx={{ height: '40px' }} onClick={() => handleScroll(-100)} ><ArrowBackIosIcon /></IconButton>
                <Stack gap={3} ref={scroll} direction={'row'} className='slider'>
                    <HomeProductCard image={''} price={'Rs 12001   '} name={'Nokia 77t767'} />
                    <HomeProductCard image={''} price={'Rs 12002   '} name={'Nokia 77t767'} />
                    <HomeProductCard image={''} price={'Rs 12003   '} name={'Nokia 77t767'} />
                    <HomeProductCard image={''} price={'Rs 12004   '} name={'Nokia 77t767'} />
                    <HomeProductCard image={''} price={'Rs 12005   '} name={'Nokia 77t767'} />
                    <HomeProductCard image={''} price={'Rs 12006   '} name={'Nokia 77t767'} />
                    <HomeProductCard image={''} price={'Rs 12007   '} name={'Nokia 77t767'} />
                    <HomeProductCard image={''} price={'Rs 12008   '} name={'Nokia 77t767'} />
                    <HomeProductCard image={''} price={'Rs 12009   '} name={'Nokia 77t767'} />
                    <HomeProductCard image={''} price={'Rs 12009   '} name={'Nokia 77t767'} />
                    <HomeProductCard image={''} price={'Rs 12007   '} name={'Nokia 77t767'} />
                    <HomeProductCard image={''} price={'Rs 12006   '} name={'Nokia 77t767'} />
                    <HomeProductCard image={''} price={'Rs 12005   '} name={'Nokia 77t767'} />
                    <HomeProductCard image={''} price={'Rs 12004   '} name={'Nokia 77t767'} />
                </Stack>
                <IconButton sx={{ height: '40px' }} onClick={() => handleScroll(100)}><ArrowForwardIosIcon /></IconButton>
            </Stack>





        </Stack>
    )
}

export default CategoryWiseProduct