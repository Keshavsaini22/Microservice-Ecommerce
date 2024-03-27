import { Stack } from '@mui/material'
import React from 'react'
import Header from './Header'
import Categories from './Categories'
import CategoryWiseProduct from './CategoryWiseProduct'

function Home() {
    return (
        <Stack p={2} gap={4} sx={{}} >
            <Header />
            <Categories />
            <CategoryWiseProduct />
        </Stack>
    )
}

export default Home