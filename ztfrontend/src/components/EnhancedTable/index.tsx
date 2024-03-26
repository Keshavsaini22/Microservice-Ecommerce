import { Checkbox, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, Toolbar, Tooltip, Typography } from '@mui/material';
import { Stack, alpha } from '@mui/system'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router';
interface Data {
    id: string;
    orderid: string;
    date: string;
    customername: string;
    name: string;
    amount: number;
    status: string;
}

function createData(
    id: string,
    name: string,
    orderid: string,
    date: string,
    customername: string,
    amount: number,
    status: string,
): Data {
    return {
        id,
        name,
        orderid,
        date,
        customername,
        amount,
        status
    };
}
const rows = [
    createData("1", 'Cupcake', '305', '12-MARCH', 'kESHAV', 4.3, 'Pending'),
    createData("2", 'Donut', '452', '12-MARCH', 'kESHAV', 4.9, 'Pending'),
    createData("3", 'Eclair', '262', '12-MARCH', 'kESHAV', 6.0, 'Pending'),
    createData('4', 'Frozen yoghurt', '159', '12-MARCH', 'kESHAV', 4.0, 'Pending'),
    createData('5', 'Gingerbread', '356', '12-MARCH', 'kESHAV', 3.9, 'Pending'),
    createData('6', 'Honeycomb', '408', '12-MARCH', 'kESHAV', 6.5, 'Pending'),
    createData('7', 'Ice cream sandwich', '237', '12-MARCH', 'kESHAV', 4.3, 'Pending'),
    createData('8', 'Jelly Bean', '375', '12-MARCH', 'kESHAV', 0.0, 'Pending'),
    createData('9', 'KitKat', '518', '12-MARCH', 'kESHAV', 7.0, 'Pending'),
    createData('10', 'Lollipop', '392', '12-MARCH', 'kESHAV', 0.0, 'Pending'),
    createData('11', 'Marshmallow', '318', '12-MARCH', 'kESHAV', 2.0, 'Pending'),
    createData('12', 'Nougat', '360', '12-MARCH', 'kESHAV', 37.0, 'Pending'),
    createData('13', 'Oreo', '437', '12-MARCH', 'kESHAV', 4.0, 'Pending'),
];
interface HeadCell {
    id: keyof Data;
    label: string;
}

const headCells: readonly HeadCell[] = [
    {
        id: 'name',
        label: 'Product Name',
    },
    {
        id: 'orderid',
        label: 'Order Id',
    },
    {
        id: 'date',
        label: 'Date',
    },
    {
        id: 'customername',
        label: 'Customer Name',
    },
    {
        id: 'amount',
        label: 'Amount',
    },
    {
        id: 'status',
        label: 'Status',
    }
];


interface EnhancedTableProps {
    numSelected: number;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
    const { onSelectAllClick, numSelected, rowCount } =
        props;


    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={'left'}
                        sx={{ fontWeight: '600' }}
                    >
                        {headCell.label}
                    </TableCell>
                ))}<TableCell align={'left'}
                    sx={{ fontWeight: '600' }}>More Info</TableCell>
            </TableRow>
        </TableHead>
    );
}
interface EnhancedTableToolbarProps {
    numSelected: number;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
    const { numSelected } = props;
    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Recent Purchases
                </Typography>
            )}
            {numSelected > 0 ? (
                <>
                    <Tooltip title="Edit">
                        <IconButton>
                            <ModeEditIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <IconButton>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip></>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton>
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
}
function OrderListTable() {
    const [selected, setSelected] = React.useState<readonly string[]>([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const navigate = useNavigate();
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleClick = (event: React.MouseEvent<unknown>, id: string) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected: readonly string[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };

    const isSelected = (id: string) => selected.indexOf(id) !== -1;
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows = React.useMemo(
        () =>
            rows.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [page, rowsPerPage],
    );
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <EnhancedTableToolbar numSelected={selected.length} />
            <TableContainer sx={{ maxHeight: 600 }}>
                <Table stickyHeader aria-label="sticky table">
                    <EnhancedTableHead
                        numSelected={selected.length}
                        onSelectAllClick={handleSelectAllClick}
                        rowCount={rows.length}
                    />
                    <TableBody>
                        {visibleRows.map((row, index) => {
                            const isItemSelected = isSelected(row.id);
                            const labelId = `enhanced-table-checkbox-${index}`;

                            return (
                                <TableRow
                                    hover
                                    onClick={(event) => handleClick(event, row.id)}
                                    role="checkbox"
                                    aria-checked={isItemSelected}
                                    tabIndex={-1}
                                    key={row.id}
                                    selected={isItemSelected}
                                    sx={{ cursor: 'pointer' }}
                                >
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            color="primary"
                                            checked={isItemSelected}
                                            inputProps={{
                                                'aria-labelledby': labelId,
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell
                                        component="th"
                                        id={labelId}
                                        scope="row"
                                        padding="none"
                                    >
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="left">{row.orderid}</TableCell>
                                    <TableCell align="left">{row.date}</TableCell>
                                    <TableCell align="left">{row.customername}</TableCell>
                                    <TableCell align="left">{row.amount}</TableCell>
                                    <TableCell align="left">{row.status}</TableCell>
                                    <TableCell align="left">
                                        <IconButton onClick={() => { navigate('/home/orderdetails') }}
                                        ><InfoIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                        {emptyRows > 0 && (
                            <TableRow
                                style={{
                                    height: (53) * emptyRows,
                                }}
                            >
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper >
    )
}

export default OrderListTable