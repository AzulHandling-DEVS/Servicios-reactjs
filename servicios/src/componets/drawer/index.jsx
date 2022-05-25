import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useState, Fragment } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { InputLabel, Select, MenuItem, FormControl, } from '@mui/material';
import './style.css';



export default function MenuDrawer() {

    const [service, setService] = useState('');
    const [gpuService, setGpuService] = useState('');
    const [hoursNight, setHoursNight] = useState('');
    const [hoursDay, setHoursday] = useState('');

    const handleChange = (event) => {
        setService(event.target.value);
    };

    const handleChangeGpu = (event) => {
        setGpuService(event.target.value);
    };

/*     function HoursDifference() {
        if ( hoursDay < hoursNight) {
            alert("La hora de noche no puede ser mayor que la hora de día");
        } else {
            alert("La hora de noche es menor que la hora de día");
        }
    } */




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
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log("form submitted");
                }}
            >
                <List sx={{ mt: 5 }}>
                    <ListItem>
                        <FormControl sx={{ width: '100%' }}>
                            <InputLabel id="demo-simple-select-label">Servicio</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="SelectService"
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
                            id="FlNoIn"
                            label="Flight number in"
                            variant="outlined" />
                    </ListItem>

                    <ListItem >
                        <TextField
                            id="FlNoOut"
                            label="Flight number out"
                            variant="outlined" />
                    </ListItem>

                    <ListItem >
                        <TextField
                            id="REGNumber"
                            label="REG"
                            variant="outlined" />
                    </ListItem>

                    {service === 'GPU' 
                    ? <div>
                            <ListItem>
                                <FormControl sx={{ width: '100%' }}>
                                    <InputLabel id="demo-simple-select-label">GPU type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="GPUSelect"
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
                                    id="HoursNight"
                                    InputProps={{ inputProps: { min: 0, max: 8 } }}
                                    sx={{ width: '100%' }}
                                    label="Hours night"
                                    placeholder={0}
                                    step={0.5}

                                    onChange={(e) => {
                                        setHoursNight(e.target.value);
                                    }}
                                    variant="outlined"
                                />
                            </ListItem>
                            <ListItem >
                                <TextField
                                    type='number'
                                    id="HoursDay"
                                    label="Hours morning"
                                    InputProps={{ inputProps: { min: 0, max: 8 } }}
                                    sx={{ width: '100%' }}
                                    placeholder= {0}
                                    step={0.5}
                                    onChange={(e) => {
                                        setHoursday(e.target.value);
                                    }}
                                    variant="outlined" />
                            </ListItem>

                            <ListItem >
                                <TextField
                                    id="CommetsBox"
                                    label="Commets"
                                    variant="outlined"
                                    multiline
                                    minRows={5}
                                    sx={{ width: '220px' }}
                                />
                            </ListItem>
                        </div> 
                        : <ListItem >
                            <TextField
                                id="CommetsBox"
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
                            
                            type="submit"
                            disabled={((hoursNight < hoursDay) 
                            || (hoursNight > 8) 
                            || (hoursDay > 8) 
                            || service === 'Towing' ) 
                            ? false 
                            : true}
                            // onClick={HoursDifference}
                            >
                            SEND DATA</Button>
                    </ListItem>
                </List>
            </form>
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