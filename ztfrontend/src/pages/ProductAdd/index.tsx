import { Box, Grid, Stack, TextField } from '@mui/material'
import ProductHeader from './ProductHeader'
import ProductLeft from './ProductLeft'
import TypographyText from '../../components/TypographyText'


function ProductAdd() {
    return (
        <>
            <Stack p={4} sx={{ backgroundColor: 'rgb(246, 248, 255)' }} >
                <ProductHeader />
                <Grid spacing={2} container my={3} p={3} sx={{ backgroundColor: 'white', borderRadius: '20px' }}>
                    <Grid item xs={6.5} >
                        <ProductLeft />
                    </Grid>
                    <Grid item xs={5.5}>
                        <Box width={'100%'} height={'30%'} sx={{ backgroundColor: 'lightgray', borderRadius: '15px' }}></Box>
                        <Stack gap={1} py={1}>
                            <TypographyText text={'Product Gallery'} fontSize={'14'} fontWeight={'600'} />
                            <TextField
                                id="outlined-multiline-static"
                                multiline
                                rows={4}
                                placeholder='Description.................'
                            />
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
        </>
    )
}

export default ProductAdd