import { Checkbox, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, Toolbar, Tooltip, Typography } from '@mui/material';
import { Stack, alpha } from '@mui/system'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import OrderListTable from '../../components/EnhancedTable';
import OrderHeader from './OrderHeader';



function OrderList() {


    return (
        <Stack p={4} gap={2} sx={{}} >
            <OrderHeader />
            <OrderListTable />
        </Stack>
    )
}

export default OrderList