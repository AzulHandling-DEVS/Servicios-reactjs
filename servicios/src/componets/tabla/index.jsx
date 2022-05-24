import * as React from 'react';
import $ from 'jquery';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';

const columns = [
    { id: 'id', label: 'id', width: '10px' },
    { id: 'date', label: 'Date', width: '10px', align: 'center' },
    {
        id: 'service',
        label: 'Service',
        width: '10px',
        format: (value) => value.toLocaleString('en-US'),
        align: 'center',
    },
    {
        id: 'FlNoIn',
        label: 'Flight Nº In',
        width: '10px',
        format: (value) => value.toLocaleString('en-US'),
        align: 'center',
    },
    {
        id: 'FlNoOut',
        label: 'Flight Nº Out',
        width: '10px',
        format: (value) => value.toFixed(2),
        align: 'center',
    },
    {
        id: 'reg',
        label: 'REG',
        width: '10px',
        format: (value) => value.toFixed(2),
        align: 'center',
    },
    {
        id: 'gpunumber',
        label: 'GPU Number',
        width: '10px',
        format: (value) => value.toFixed(2),
        align: 'center',
    },
    {
        id: 'hoursnight',
        label: 'Hours Night',
        width: '10px',
        format: (value) => value.toFixed(2),
        align: 'center',
    },
    {
        id: 'hoursmorning',
        label: 'Hours morning',
        width: '10px',
        format: (value) => value.toFixed(2),
        align: 'center',
    },
    {
        id: 'comments',
        label: 'Comments',
        width: '10px',
        format: (value) => value.toFixed(2),
        align: 'center',
    },
    {
        id: 'deleteRow',
        label: 'Delete',
        width: '5px',
        format: (value) => value.toFixed(2),
        align: 'center',
        
    },

];

const deleteRowIcon = <DeleteIcon sx={{color:'#9b0000'}} />

function createData(id, date, service, FlNoIn, FlNoOut, reg, gpunumber, hoursnight, hoursmorning, comments, deleteRow) {
    return { id, date, service, FlNoIn, FlNoOut, reg, gpunumber, hoursnight, hoursmorning, comments, deleteRow };
}



const rows = [
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8, 0.2, 'First Wave', deleteRowIcon),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8, 0.2, 'First Wave', deleteRowIcon),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8, 0.2, 'First Wave', deleteRowIcon),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8, 0.2, 'First Wave', deleteRowIcon),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8, 0.2, 'First Wave', deleteRowIcon),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8, 0.2, 'First Wave', deleteRowIcon),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8, 0.2, 'First Wave', deleteRowIcon),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8, 0.2, 'First Wave', deleteRowIcon),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8, 0.2, 'First Wave', deleteRowIcon),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8, 0.2, 'First Wave', deleteRowIcon),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8, 0.2, 'First Wave', deleteRowIcon),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8, 0.2, 'First Wave', deleteRowIcon),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8, 0.2, 'First Wave', deleteRowIcon),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8, 0.2, 'First Wave', deleteRowIcon),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8, 0.2, 'First Wave', deleteRowIcon),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8, 0.2, 'First Wave', deleteRowIcon),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8, 0.2, 'First Wave', deleteRowIcon),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8, 0.2, 'First Wave', deleteRowIcon),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8, 0.2, 'First Wave', deleteRowIcon),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8, 0.2, 'First Wave', deleteRowIcon),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8, 0.2, 'First Wave', deleteRowIcon),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8, 0.2, 'First Wave', deleteRowIcon),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8, 0.2, 'First Wave', deleteRowIcon),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8, 0.2, 'First Wave', deleteRowIcon),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8, 0.2, 'First Wave', deleteRowIcon),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8, 0.2, 'First Wave', deleteRowIcon),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8, 0.2, 'First Wave', deleteRowIcon),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8, 0.2, 'First Wave', deleteRowIcon),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8, 0.2, 'First Wave', deleteRowIcon),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8, 0.2, 'First Wave', deleteRowIcon),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8, 0.2, 'First Wave', deleteRowIcon),
    createData('d1234', '23/07/22', 'Buses', '9034', '9045', 'EINE', 'GPU-46', 0.8, 0.2, 'First Wave', deleteRowIcon),
    
];

export default function DataTable() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(50);
/*     const [services, getNewServices] = useState({});
    let counter = 0; */

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
    };


/* 
    const fetchServices = async () => {
        try {
            const sentBoardData = await $.ajax({
                url: "https://procesos/servicios-list.php",
                type: 'GET',
                data: {
                    //  Fecha, // hacer por contexto con el date picker del header
                    //  Fecha2, // hacer por contexto con el date picker del header
                    //  APT, // ver por donde viene
                }
            })
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    getNewServices({ ...data })
                    console.log(services)
                })
        } catch (err) {
            console.error(err.message)
        }
    }; */


    return (
        <Paper sx={{ width: '95vw', overflow: 'hidden', marginLeft: '2.5vw', marginTop: '10px' }} elevation={6} >
            <TableContainer sx={{ maxHeight: '80vh' }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    style={{
                                        minWidth: column.minWidth,
                                        backgroundColor: '#06358F',
                                        color: '#ffffff',
                                        align: 'flex-start',
                                    }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows // esto seria services.data
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align='flex-start'>
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
                rowsPerPageOptions={[50, 100, 150]}
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
































// ---------------------------- TABLE BODY PRUEBA TÉCNICA -------------------------------------------------- //

{/* <TableBody>
    {flights.arrivals
        ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        ?.map((row, index) => {
            if (index > counter) {
                return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.number} >
                        {columns.map((column) => {
                            const value = row[column.id];
                            if (column.label === 'Airline') {
                                return (
                                    <TableCell key={column.id} align={column.align}>
                                        {row.airline.name}
                                    </TableCell>
                                );
                            }
                            if (column.label === 'Airport/IATA') {
                                return (
                                    <TableCell key={column.id} align={column.align}>
                                        {row.departure.airport?.iata}
                                    </TableCell>
                                );
                            }
                            if (column.label === 'REG') {
                                return (
                                    <TableCell key={column.id} align={column.align}>
                                        {row.aircraft.reg}
                                    </TableCell>
                                );
                            }
                            if (column.label === 'Expected time') {
                                return (
                                    <TableCell key={column.id} align={column.align}>
                                        {row.arrival.scheduledTimeLocal}
                                    </TableCell>
                                );
                            }
                            return (
                                <TableCell key={column.id} align={column.align}>
                                    {value}
                                </TableCell>
                            )
                        })}
                    </TableRow>
                );
            } else {
                return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.number}>
                        {columns.map((column) => {
                            const value = row[column.id];
                            if (column.label === 'Airline') {
                                return (
                                    <TableCell key={column.id} align={column.align}>
                                        {row.airline.name}
                                    </TableCell>
                                );
                            }
                            if (column.label === 'Airport/IATA') {
                                return (
                                    <TableCell key={column.id} align={column.align}>
                                        {row.departure.airport?.iata}
                                    </TableCell>
                                );
                            }
                            if (column.label === 'REG') {
                                return (
                                    <TableCell key={column.id} align={column.align}>
                                        {row.aircraft.reg}
                                    </TableCell>
                                );
                            }
                            if (column.label === 'Expected time') {
                                return (
                                    <TableCell key={column.id} align={column.align}>
                                        {row.arrival.scheduledTimeLocal}
                                    </TableCell>
                                );
                            }
                            return (
                                <TableCell key={column.id} align={column.align}>
                                    {value}
                                </TableCell>
                            )
                        })}
                    </TableRow>
                );
            }
        })}
</TableBody>
</Table >
</TableContainer >
    <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={flights.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
    /> */}