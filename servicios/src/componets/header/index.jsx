import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './style.css';
import { Stack } from '@mui/material';
import MenuDrawer from '../drawer';

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="baseline"
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
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        SERVICIOS
                    </Typography>
                    <AddCircleIcon sx={{}}>
                    MENU
                    <MenuDrawer/>
                    </AddCircleIcon>
                    </Stack>
                    <Stack  
                    direction="row"

                    >
                    <TextField
                        className='date_picker'
                        id="date"
                        type="date"
                        defaultValue="2017-05-24"
                        sx={{ width: '17vw', borderRadius: '50px', height: '5vh', paddingTop: '1vh' }}
                    />
                    <TextField
                        className='date_picker'
                        id="date"
                        type="date"
                        defaultValue="2017-05-24"
                        sx={{ width: '17vw', borderRadius: '50px', height: '5vh', paddingTop: '1vh', marginLeft: '1vw' }}
                    />
                    </Stack>
                </Stack>
            </AppBar>
        </Box>
    );
}