import { Stack } from '@mui/material'
import React from 'react'
import Header from './Header'
import Categories from './Categories'
import CategoryWiseProduct from './CategoryWiseProduct'

function Home() {
    return (
        <Stack width={'100%'} p={2} gap={4} >
            <Header />
            <Categories />
            <CategoryWiseProduct />
        </Stack>
    )
}

export default Home