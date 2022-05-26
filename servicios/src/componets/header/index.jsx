import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import MenuDrawer from '../drawer';
import './style.css';




export default function Header() {

    const current = new Date();
    const date = `${current.getDate()}-${current.getMonth() + 1}-${current.getFullYear()}`;
    const [searchValue, setSearchValue] = useState('');


    const getDate1Value = (event) => {
        const date1Value = event.target.value;
        console.log(date1Value, 'date1Value');
    };

    const getDate2Value = (event) => {
        const date2Value = event.target.value;
        console.log(date2Value, 'date2Value');
    };


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
                        <TextField
                            className='date_picker'
                            id="date_1"
                            type="date"
                            placeholder={date}
                            onChange={getDate1Value}
                            sx={{
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
                            onChange={getDate2Value}
                            sx={{
                                width: '17vw',
                                borderRadius: '50px',
                                height: '5vh',
                                paddingTop: '1vh',
                                marginLeft: '1vw'
                            }}
                        />
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
                            value={searchValue}
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
                            onClick={console.log("searchValue")}
                            >
                            Send
                        </Button>
                        </form>
                    </div>
                </Stack>
            </AppBar>
        </Box>
    );
}