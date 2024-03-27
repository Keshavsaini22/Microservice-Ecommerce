import { Stack } from '@mui/material'
import React from 'react'
import Header from './Header'
import Categories from './Categories'

function Home() {
    return (
        <Stack p={2} gap={2} sx={{}} >
            <Header />
            <Categories/>
        </Stack>
    )
}

export default Home