import { Breadcrumbs, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function HearderBreadcrumb() {
    function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    const breadcrumbs = [
        <Link key="1" underline="hover" >
            Home
        </Link>,
        <Link key="2" underline="hover">
            All products
        </Link>,
        <Typography key="3" color="text.primary">
            Product Details
        </Typography>,
    ];

    return (
        <Stack spacing={2}>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                {breadcrumbs}
            </Breadcrumbs>
        </Stack>
    )
}

export default HearderBreadcrumb