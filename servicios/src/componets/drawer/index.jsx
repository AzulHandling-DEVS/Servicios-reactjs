import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useState, Fragment } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { InputLabel, Select, MenuItem, FormControl } from '@mui/material';



export default function MenuDrawer() {

    const [service, setService] = useState('');
    const [gpuService, setGpuService] = useState('');

    const handleChange = (event) => {
        setService(event.target.value);
    };

    const handleChangeGpu = (event) => {
        setGpuService(event.target.value);
    };

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
            component="form"
            noValidate
            autoComplete="off"

        >
            <List sx={{ mt: 5 }}>
                <ListItem>
                    <FormControl sx={{ width: '100%' }}>
                        <InputLabel id="demo-simple-select-label">Servicio</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={service}
                            label="Service"
                            onChange={handleChange}

                        >
                            <MenuItem value={"Towing"}>Towing</MenuItem>
                            <MenuItem value={"GPU"}>GPU</MenuItem>
                        </Select>
                    </FormControl>
                </ListItem>
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
                {service === 'GPU' ?
                    <div>
                        <ListItem>
                            <FormControl sx={{ width: '100%' }}>
                                <InputLabel id="demo-simple-select-label">GPU type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={gpuService}
                                    label="Service"
                                    onChange={handleChangeGpu}

                                >
                                    <MenuItem value={"GPU-046"}>GPU-046</MenuItem>
                                    <MenuItem value={"GPU-047"}>GPU-047</MenuItem>
                                    <MenuItem value={"GPU-047"}>GPU-048</MenuItem>
                                    <MenuItem value={"GPU-047"}>GPU-049</MenuItem>
                                    <MenuItem value={"GPU-047"}>GPU-050</MenuItem>
                                    <MenuItem value={"GPU-047"}>GPU-076</MenuItem>
                                </Select>
                            </FormControl>
                        </ListItem>
                        <ListItem >
                            <TextField
                                type='number'
                                id="standard-basic"
                                label="Hours night"
                                variant="outlined" />
                        </ListItem>
                        <ListItem >
                            <TextField
                                type='number'
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
                        </ListItem>
                    </div> :
                    <ListItem >
                        <TextField
                            id="standard-basic"
                            label="Commets"
                            variant="outlined"
                            multiline
                            minRows={5}
                            sx={{ width: '220px' }}
                        />
                    </ListItem>}
                <ListItem>
                    <Button variant="contained"
                        sx={{
                            width: '220px',
                            height: '50px'
                        }}
                    >SEND DATA</Button>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div>
            {[<AddCircleIcon sx={{ marginTop: '5px' }}
            />].map((anchor) => (
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