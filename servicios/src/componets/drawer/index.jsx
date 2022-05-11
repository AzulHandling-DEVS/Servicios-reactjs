import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useState, Fragment } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';



export default function MenuDrawer() {
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };


    const list = (anchor) => (
        <Box
            sx={{
                width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
                backgroundColor: "#f9f9f9",
                height: '100vh'
            }}
            role="presentation"
            color="main"
        >
            <List sx={{ mt: 5 }}>
                <ListItem >
                    <TextField
                        id="standard-basic"
                        label="Flight number in"
                        variant="outlined" />
                </ListItem>
                <ListItem >
                    <TextField
                        id="standard-basic"
                        label="Flight number out"
                        variant="outlined" />
                </ListItem>
                <ListItem >
                    <TextField
                        id="standard-basic"
                        label="REG"
                        variant="outlined" />
                </ListItem>
                <ListItem >
                    <TextField
                        id="standard-basic"
                        label="Hours night"
                        variant="outlined" />
                </ListItem>
                <ListItem >
                    <TextField
                        id="standard-basic"
                        label="Hours morning"
                        variant="outlined" />
                </ListItem>
                <ListItem >
                    <TextField
                        id="standard-basic"
                        label="Commets"
                        variant="outlined"
                        multiline
                        minRows={5}
                        sx={{ width: '220px' }}
                    />
                    <ListItem>
                        <Button variant="contained"
                            sx={{
                                width: '220px',
                                height: '50px'
                            }}
                        >SEND DATA</Button>
                    </ListItem>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div>
            {[<AddCircleIcon/>].map((anchor) => (
                <Fragment key={anchor}>
                    <Typography
                        onClick={toggleDrawer(anchor, true)}
                    >{anchor}</Typography>
                    <Drawer
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </Fragment>
            ))}
        </div>
    );
}