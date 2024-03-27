import { Stack } from '@mui/material'
import React from 'react'
import CategoryCard from '../../../components/CategoryCard'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import LaptopIcon from '@mui/icons-material/Laptop';
function Categories() {
    return (
        <Stack direction={'row'} gap={2} flexWrap={'wrap'} >
            <CategoryCard icon={<EmojiEventsIcon />} tag={'Popular'} />
            <CategoryCard icon={<StayCurrentPortraitIcon />} tag={'Mobile'} />
            <CategoryCard icon={<EmojiEventsIcon />} tag={'Accessories'} />
            <CategoryCard icon={<CheckroomIcon />} tag={'Clothes'} />
            <CategoryCard icon={<LaptopIcon />} tag={'Laptop'} />
            <CategoryCard icon={<EmojiEventsIcon />} tag={'Hardware'} />
            <CategoryCard icon={<LaptopIcon />} tag={'Kitchen'} />
            <CategoryCard icon={<EmojiEventsIcon />} tag={'I dont know'} />

        </Stack>
    )
}

export default Categories