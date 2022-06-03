import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import MenuDrawer from '../drawer';
import './style.css';




export default function Header() {

    // const current = new Date();
   // const date = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;
    const [searchValue, setSearchValue] = useState('');
    const [date1Value, setDate1Value] = useState(new Date().toISOString().split('T')[0]);
    const [date2Value, setDate2Value] = useState(new Date().toISOString().split('T')[0]);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                sx={{
                    height: '8vh',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    backgroundColor: '#06358F',
                }}>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="inherit"
                    spacing={2}
                    padding={1}
                    marginLeft={2}
                    marginRight={2}
                >
                    <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center">
                        <Typography
                            noWrap
                            component="div"
                            sx={{
                                display: { xs: 'none', sm: 'block' },
                                marginRight: '15px',
                                fontWeight: 'bold',
                                fontSize: '2rem',
                            }}
                        >
                            SERVICIOS
                        </Typography>
                        <Typography >
                            <MenuDrawer />
                        </Typography>
                    </Stack>
                    <div className='div_inputs'>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <TextField
                            className='date_picker'
                            id="date_1"
                            type="date"
                            value={date1Value}
                            minDate={new Date('2020-01-01')}
                            onChange={(newValue) => {
                                setDate1Value(newValue);
                                console.log(newValue, "date 1");}}
                                sx = {{
                                    width: '17vw',
                                        borderRadius: '50px',
                        height: '5vh',
                        paddingTop: '1vh'
                            }}
                        />
                        <TextField
                            className='date_picker'
                            id="date_2"
                            type="date"
                            value={date2Value}
                            minDate={new Date('2020-01-01')}
                            onChange={(newValue2) => {
                                setDate2Value(newValue2);
                                console.log(newValue2, "date 2");}}
                            sx={{
                                width: '17vw',
                                borderRadius: '50px',
                                height: '5vh',
                                paddingTop: '1vh',
                                marginLeft: '1vw'
                            }}
                        />
                        </LocalizationProvider>
                        <form type="submit"
                            className='search_flight-form'>
                            <TextField
                                className='search_flight'
                                id="input_search"
                                type="text"
                                placeholder="Search flight"
                                size='small'
                                sx={{
                                    width: '17vw',
                                    borderRadius: '50px',
                                    height: '5vh',
                                    paddingTop: '1vh',
                                    marginLeft: '1vw',
                                }}
                                onChange={(e) => setSearchValue(e.target.value)}
                            />
                            <Button
                                className='button_send'
                                variant="contained"
                                type='submit'
                                sx={{
                                    color: '#06358F',
                                    backgroundColor: '#EBC431',
                                    borderRadius: '5px',
                                    marginLeft: '15px',
                                }}
                                onClick={(e) => {
                                    console.log(searchValue, 'searchValue');
                                    e.preventDefault();
                                }}
                            >
                                SEND
                            </Button>
                        </form>
                    </div>
                </Stack>
            </AppBar>
        </Box>
    );
}