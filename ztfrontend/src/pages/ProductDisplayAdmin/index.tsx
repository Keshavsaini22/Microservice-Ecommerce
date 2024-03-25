import { Stack } from '@mui/material'
import React, { useState } from 'react'
import ProductHeader from './ProductHeader'
import TableForm from './TableForm'
import ProductCard from '../../components/ProductCard'
import CardsForm from './CardsForm'

function ProductDisplayAdmin() {
    const [table, setTable] = useState<boolean>(false)
    return (
        <Stack p={4} gap={2} sx={{ backgroundColor: 'rgb(246, 248, 255)' }} >
            <ProductHeader setTable={setTable} />
            {table ? <TableForm /> : <CardsForm />}

        </Stack>
    )
}

export default ProductDisplayAdmin