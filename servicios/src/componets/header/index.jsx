import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './style.css';

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        SERVICIOS
                    </Typography>
                    <AddCircleIcon sx={{}}>
                        
                    </AddCircleIcon>
                    
                    <TextField
                        className='date_picker'
                        id="date"
                        type="date"
                        defaultValue="2017-05-24T10:30"
                        sx={{ width: '20vw', borderRadius: '50px', height: '5vh', paddingTop: '1vh' }}
                    />
                    <TextField
                        className='date_picker'
                        id="date"
                        type="date"
                        defaultValue="2017-05-24T10:30"
                        sx={{ width: '20vw', borderRadius: '50px', height: '5vh', paddingTop: '1vh', marginLeft: '1vw' }}
                    />
                </Toolbar>
            </AppBar>
        </Box>
    );
}