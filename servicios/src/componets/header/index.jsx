import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import './style.css';
import { Stack } from '@mui/material';
import MenuDrawer from '../drawer';
import Button from '@mui/material/Button';

export default function Header() {

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;



    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                sx={{
                    height: '8vh',
                    paddingLeft: '20px',
                    paddingRight: '20px',
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
                            variant="h5"
                            noWrap
                            component="div"
                            sx={{
                                display: { xs: 'none', sm: 'block' },
                                marginRight: '15px',
                                fontWeight: 'bold',
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
                            id="date"
                            type="date"
                            sx={{
                                width: '17vw',
                                borderRadius: '50px',
                                height: '5vh',
                                paddingTop: '1vh'
                            }}
                        />
                        <TextField
                            className='date_picker'
                            id="date"
                            type="date"
                            sx={{
                                width: '17vw',
                                borderRadius: '50px',
                                height: '5vh',
                                paddingTop: '1vh',
                                marginLeft: '1vw'
                            }}
                        />
                        <TextField
                            className='search_flight'
                            id="date"
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
                        />
                        <Button
                            className='button_send'
                            variant="contained"
                            sx={{
                                color: '#06358F',
                                backgroundColor: '#EBC431',
                                borderRadius: '5px',
                                marginLeft: '15px',
                            }}>
                            Send</Button>
                    </div>
                </Stack>
            </AppBar>
        </Box>
    );
}