import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
    { id: 'id', label: 'id', width: '10px' },
    { id: 'date', label: 'Date',width: '10px' },
    {
        id: 'service',
        label: 'Service',
        width: '10px',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'FlNoIn',
        label: 'Flight Nº In',
        width: '10px',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'FlNoOut',
        label: 'Flight Nº Out',
        width: '10px',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'reg',
        label: 'REG',
        width: '10px',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'gpunumber',
        label: 'GPU Number',
        width: '10px',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'hoursnight',
        label: 'Hours Night',
        width: '10px',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'hoursmorning',
        label: 'Hours morning',
        width: '10px',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'comments',
        label: 'Comments',
        width: '10px',
        format: (value) => value.toFixed(2),
    },
];

function createData(id, date, service, FlNoIn, FlNoOut, reg, gpunumber, hoursnight, hoursmorning, comments) {
    return { id, date, service, FlNoIn, FlNoOut, reg, gpunumber, hoursnight, hoursmorning, comments };
}

const rows = [
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8 , 0.2, 'First Wave'),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8 , 0.2, 'First Wave'),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8 , 0.2, 'First Wave'),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8 , 0.2, 'First Wave'),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8 , 0.2, 'First Wave'),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8 , 0.2, 'First Wave'),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8 , 0.2, 'First Wave'),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8 , 0.2, 'First Wave'),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8 , 0.2, 'First Wave'),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8 , 0.2, 'First Wave'),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8 , 0.2, 'First Wave'),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8 , 0.2, 'First Wave'),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8 , 0.2, 'First Wave'),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8 , 0.2, 'First Wave'),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8 , 0.2, 'First Wave'),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8 , 0.2, 'First Wave'),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8 , 0.2, 'First Wave'),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8 , 0.2, 'First Wave'),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8 , 0.2, 'First Wave'),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8 , 0.2, 'First Wave'),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8 , 0.2, 'First Wave'),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8 , 0.2, 'First Wave'),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8 , 0.2, 'First Wave'),
];

export default function DataTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '95vw', overflow: 'hidden', marginLeft: '2.5vw', marginTop: '10px'}} elevation={6} >
            <TableContainer sx={{ maxHeight: '80vh' }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    style={{ minWidth: column.minWidth,
                                    backgroundColor: '#06358F',
                                    color: '#ffffff', }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 20, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}