import { Stack, Switch } from '@mui/material'
import React from 'react'
import TypographyText from '../../../components/TypographyText'
import HearderBreadcrumb from '../../../components/HearderBreadcrumb'
import CustomButton from '../../../components/CustomButton'
import { useNavigate } from 'react-router'
interface PropsType {
    setTable: any
}

function ProductHeader(props: PropsType) {
    const navigate = useNavigate()
    const handleAddProduct = () => {
        navigate('/home/addproduct')
    }
    return (
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'start'}>
            <Stack>
                <TypographyText text={'Product Details'} fontSize={'20px'} fontWeight={'600'} />
                <HearderBreadcrumb />
            </Stack>

            <Stack direction={'row'} alignItems={'center'}>
                <TypographyText text={'Table'} fontSize={'15'} fontWeight={' 600'} />
                <Switch onChange={(event) => {
                    props.setTable(event.target.checked)
                }} />
            </Stack>
            <CustomButton onclick={handleAddProduct} sxprops={{ sx: { width: '200px', height: '48px' } }} variant="contained" text="Add Product" />
        </Stack>
    )
}

export default ProductHeader