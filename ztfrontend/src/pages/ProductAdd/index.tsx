import { Box, Grid, Stack, TextField } from '@mui/material'
import ProductHeader from './ProductHeader'
import ProductLeft from './ProductLeft'
import TypographyText from '../../components/TypographyText'
import { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import DragAndDrap from '../../components/DragAndDrap';

const fileTypes = ["JPG", "PNG"];

function ProductAdd() {
    const [file, setFile] = useState(null);
    const handleChange = (file: any) => {
        setFile(file);
        console.log('file: ', file);
    };
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
                        <Stack py={2} gap={1} >
                            <TypographyText text={'Product Gallery'} fontSize={'14'} fontWeight={'600'} />
                            <FileUploader children={<DragAndDrap file={file} />} handleChange={handleChange} multiple name="file" types={fileTypes} />
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
        </>
    )
}

export default ProductAdd