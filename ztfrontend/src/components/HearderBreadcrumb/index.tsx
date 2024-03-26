import { Box, Breadcrumbs, Stack, Typography, TypographyProps } from '@mui/material'
import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';

interface linkDetails {
    text: string,
    link: string,
}

interface HeaderBreadcrumbProps {
    text: string,
    textStyles: TypographyProps,
    breadcrumb: linkDetails[]
}

function HearderBreadcrumb(props: HeaderBreadcrumbProps) {
    return (
        // <Stack spacing={2}>
        //     <Breadcrumbs
        //         separator={<NavigateNextIcon fontSize="small" />}
        //         aria-label="breadcrumb"
        //     >
        //         {breadcrumbs}
        //     </Breadcrumbs>
        // </Stack>
        <Box>
            <Typography {...props.textStyles}>{props.text}</Typography>
            <div role="presentation" >
                <Breadcrumbs aria-label="breadcrumb">
                    {props.breadcrumb && props.breadcrumb.length > 0 && props.breadcrumb.map((bread) => {
                        return (
                            <Link to={bread.link} style={{ fontSize: "16px", fontWeight: "600" }}>
                                {bread.text}
                            </Link>
                        )
                    })}
                    <Typography fontSize="16px" fontWeight="600">{props.text}</Typography>
                </Breadcrumbs>
            </div>
        </Box>
    )
}

export default HearderBreadcrumb